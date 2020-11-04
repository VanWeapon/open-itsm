import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { getConnection } from "typeorm";
import {
	EventQueueEntry,
	EventQueueStatus,
} from "../../database/entity/system/EventQueueEntry";

export class StatusAPI {
	static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const transactionID = ctx.params.id;
		const eventQueueEntry = await getConnection(process.env.NODE_ENV)
			.getRepository(EventQueueEntry)
			.findOne(transactionID);

		if (!eventQueueEntry) {
			ctx.response.status = 404;
			ctx.response.body = "Invalid transaction id";
			await next();
			return;
		}

		switch (eventQueueEntry.status) {
			case EventQueueStatus.READY:
			case EventQueueStatus.QUEUED:
			case EventQueueStatus.PROCESSING:
				ctx.response.status = 200;
				ctx.response.body = "Transaction in progress";
				break;
			case EventQueueStatus.PROCESSED:
				ctx.response.status = 201;
				ctx.response.body =
					"Transaction complete: \n" + eventQueueEntry.message;
				break;
		}
		await next();
	}

	static async post(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const event = ctx.request.body as EventQueueEntry;
		const repo = getConnection(process.env.NODE_ENV).getRepository(
			EventQueueEntry
		);
		try {
			const newEntry = repo.create(event);
			repo.save(newEntry);
			ctx.response.status = 201;
			ctx.response.body = {
				transactionID: newEntry.guid,
				message: "Job accepted",
			};
		} catch (error) {
			ctx.response.status = 400;
			ctx.response.body = "Invalid event passed: \n" + error;
		} finally {
			await next();
		}
	}

	static async put(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const transactionID = ctx.params.id;
		const newStatus = ctx.request.body.status as EventQueueStatus;
		const message = ctx.request.body.message as string;

		if (!newStatus || !transactionID) {
			ctx.response.status = 400;
			ctx.response.body =
				"A valid transaction ID and new status must be provided to update a job";
			await next();
			return;
		}
		const repo = getConnection(process.env.NODE_ENV).getRepository(
			EventQueueEntry
		);

		try {
			const event = await repo.findOne(transactionID);
			if (!event) {
				ctx.response.status = 404;
				ctx.response.body = `Job with id ${transactionID} does not exist`;
				await next();
				return;
			} else {
				event.status = newStatus;
				if (message) {
					event.message = message;
				}
				await repo.save(event);
			}
		} catch (e) {
			ctx.response.status = 400;
			ctx.response.body = e;
		}

		await next();
	}
}
