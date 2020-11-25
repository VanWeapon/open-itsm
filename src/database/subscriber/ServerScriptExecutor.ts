import {
	EventSubscriber,
	EntitySubscriberInterface,
	InsertEvent,
	getConnection,
	UpdateEvent,
	RemoveEvent,
	LoadEvent,
} from "typeorm";
import { Evaluator } from "../../server/utilities/Evaluator";
import { SystemUtil } from "../../util/SystemUtil";
import { Record } from "../entity/system/Record";
import { ServerScript } from "../entity/system/ServerScript";
const su = new SystemUtil();
@EventSubscriber()
export class ServerScriptExecutor implements EntitySubscriberInterface<Record> {
	beforeInsert(event: InsertEvent<Record>) {
		const tableName = event.metadata.tableName;
		getConnection(process.env.NODE_ENV)
			.getRepository(ServerScript)
			.find({
				where: {
					table: tableName,
					when: "before",
					on: "insert",
					active: true,
				},
				select: ["script", "name", "order"],
			})
			.then((scripts) => {
				const sorted = scripts.sort((a, b) => {
					return a.order - b.order;
				});
				sorted.forEach((script) => {
					try {
						const evaluator = new Evaluator(
							tableName,
							event.entity.guid
						);
						evaluator.setScript(script.script);
						evaluator.evaluateScript();
					} catch (error) {
						su.error(error);
					}
				});
			});
	}
	afterInsert(event: InsertEvent<Record>) {
		const tableName = event.metadata.tableName;
		getConnection(process.env.NODE_ENV)
			.getRepository(ServerScript)
			.find({
				where: {
					table: tableName,
					when: "after",
					on: "insert",
					active: true,
				},
				select: ["script", "name", "order"],
			})
			.then((scripts) => {
				const sorted = scripts.sort((a, b) => {
					return a.order - b.order;
				});
				sorted.forEach((script) => {
					try {
						const evaluator = new Evaluator(
							tableName,
							event.entity.guid
						);
						evaluator.setScript(script.script);
						evaluator.evaluateScript();
					} catch (error) {
						su.error(error);
					}
				});
			});
	}
	beforeUpdate(event: UpdateEvent<Record>) {
		const tableName = event.metadata.tableName;
		getConnection(process.env.NODE_ENV)
			.getRepository(ServerScript)
			.find({
				where: {
					table: tableName,
					when: "before",
					on: "update",
					active: true,
				},
				select: ["script", "name", "order"],
			})
			.then((scripts) => {
				const sorted = scripts.sort((a, b) => {
					return a.order - b.order;
				});
				sorted.forEach((script) => {
					try {
						const evaluator = new Evaluator(
							tableName,
							event.entity.guid
						);
						evaluator.setScript(script.script);
						evaluator.evaluateScript();
					} catch (error) {
						su.error(error);
					}
				});
			});
	}
	afterUpdate(event: UpdateEvent<Record>) {
		const tableName = event.metadata.tableName;
		getConnection(process.env.NODE_ENV)
			.getRepository(ServerScript)
			.find({
				where: {
					table: tableName,
					when: "after",
					on: "update",
					active: true,
				},
				select: ["script", "name", "order"],
			})
			.then((scripts) => {
				const sorted = scripts.sort((a, b) => {
					return a.order - b.order;
				});
				sorted.forEach((script) => {
					try {
						const evaluator = new Evaluator(
							tableName,
							event.entity.guid
						);
						evaluator.setScript(script.script);
						evaluator.evaluateScript();
					} catch (error) {
						su.error(error);
					}
				});
			});
	}
	beforeRemove(event: RemoveEvent<Record>) {
		const tableName = event.metadata.tableName;
		if (!event.entity) {
			return;
		}
		getConnection(process.env.NODE_ENV)
			.getRepository(ServerScript)
			.find({
				where: {
					table: tableName,
					when: "before",
					on: "delete",
					active: true,
				},
				select: ["script", "name", "order"],
			})
			.then((scripts) => {
				const sorted = scripts.sort((a, b) => {
					return a.order - b.order;
				});
				sorted.forEach((script) => {
					try {
						const evaluator = new Evaluator(
							tableName,
							event.entity!.guid
						);
						evaluator.setScript(script.script);
						evaluator.evaluateScript();
					} catch (error) {
						su.error(error);
					}
				});
			});
	}
	afterRemove(event: RemoveEvent<Record>) {
		const tableName = event.metadata.tableName;
		if (!event.entity) {
			return;
		}
		getConnection(process.env.NODE_ENV)
			.getRepository(ServerScript)
			.find({
				where: {
					table: tableName,
					when: "after",
					on: "delete",
					active: true,
				},
				select: ["script", "name", "order"],
			})
			.then((scripts) => {
				const sorted = scripts.sort((a, b) => {
					return a.order - b.order;
				});
				sorted.forEach((script) => {
					try {
						const evaluator = new Evaluator(
							tableName,
							event.entity!.guid
						);
						evaluator.setScript(script.script);
						evaluator.evaluateScript();
					} catch (error) {
						su.error(error);
					}
				});
			});
	}
	// afterLoad(entity: Record, event: LoadEvent<Record>) {
	// 	const tableName = event.metadata.tableName;
	// 	getConnection(process.env.NODE_ENV)
	// 		.getRepository(ServerScript)
	// 		.find({
	// 			where: {
	// 				table: tableName,
	// 				when: "after",
	// 				on: "load",
	// 				active: true,
	// 			},
	// 			select: ["script", "name", "order"],
	// 		})
	// 		.then((scripts) => {
	// 			const sorted = scripts.sort((a, b) => {
	// 				return a.order - b.order;
	// 			});
	// 			sorted.forEach((script) => {
	// 				try {
	// 					const evaluator = new Evaluator(tableName, entity.guid);
	// 					evaluator.setScript(script.script);
	// 					evaluator.evaluateScript();
	// 				} catch (error) {
	// 					su.error(error);
	// 				}
	// 			});
	// 		});
	// }
}
