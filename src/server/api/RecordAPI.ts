import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { getConnection, Repository } from "typeorm";

/**
 * RecordAPI
 * Retreives or inserts records into a given table
 * Tablename must be passed as a query parameter like so:
 * /api/record/incident where incident is the table name
 * E.g.
 * GET /api/record/incident?number=INC001234
 * will query for a record in the incident table that matches the number of INC001234
 */
export class RecordAPI {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const tableName = ctx.params.table;
		const id = ctx.params.id || null;
		const repository = getConnection().getRepository(tableName);

		if (id) {
			try {
				const record = await RecordAPI.getByID(id, repository);
				if (record) {
					ctx.status = 200;
					ctx.body = record;
					await next();
					return;
				}
			} catch (e) {
				ctx.status = 500;
				ctx.body = e;
				await next();
				return;
			}
		} else {
			const records = repository.find();
			if (records) {
				ctx.status = 200;
				ctx.body = records;
				await next();
				return;
			} else {
				ctx.status = 404;
				ctx.body = `No records found for table ${tableName}`;
				await next();
				return;
			}
		}

		await next();
	}

	private static async getByID(
		id: string,
		repo: Repository<any>
	): Promise<any | null> {
		const record = await repo.findOne(id);
		if (record) {
			return record;
		} else {
			return null;
		}
	}

	public static async post(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		await next();
	}

	public static async put(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		await next();
	}

	public static async delete(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		await next();
	}
}
