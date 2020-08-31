import { DB } from "../../database/engine/DB";
import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { Client, Pool } from "pg";
import { createDecipher } from "crypto";

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
		next: Next,
		client: Client | Pool
	) {
		const tableName = ctx.params.table;
		console.log("Received get request for " + tableName);
		console.log("Loading DB engine");
		const engine = new DB(client);
		const isValidTable = await engine.initialise(tableName);

		if (!isValidTable) {
			ctx.response.status = 400;
			ctx.response.body = `Table with name ${tableName} does not exist`;
		}

		const result = await engine.getAllTableRecords();

		console.log("Found records from database");
		console.log(result);

		ctx.response.status = 200;
		ctx.body = JSON.stringify(result);

		next();
	}

	public static async post(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	) {
		const tableName = ctx.params.table;
		const fields = ctx.request.body;
		const engine = new DB(client);
		engine.initialise(tableName);

		console.log(ctx.request.body);

		try {
			let createdRecord = await engine.insert(fields);
			if (createdRecord) {
				console.log("Record created");
				ctx.response.status = 201;
				ctx.response.body = createdRecord;
			}
		} catch (e) {
			console.error(e);
			ctx.response.body = e;
			ctx.response.status = 400;
		} finally {
			next();
		}
	}

	public static async put(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	) {
		next();
	}

	public static async delete(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	) {
		const tableName = ctx.params.table;
		const recordID = ctx.params.id;

		const engine = new DB(client);
		let validTable = await engine.initialise(tableName);

		if (!validTable) {
			ctx.response.status = 400;
			ctx.response.body = `Invalid table name ${tableName}`;
			return;
		}

		console.log(
			`Attempting to delete record ${recordID} from table ${tableName}`
		);

		let foundRecord = await engine.get(recordID);
		if (foundRecord) {
			console.log("Found record, trying to delete");
			let deleted = await engine.delete();
			if (deleted) {
				ctx.response.status = 200;
				ctx.response.body = `${tableName} record with id of ${recordID} was successfully deleted`;
			} else {
				ctx.response.status = 500;
				ctx.response.body = "Error deleting record";
			}
		} else {
			ctx.response.status = 400;
			ctx.response.body = `No ${tableName} record matching id ${recordID} found`;
		}

		await next();
		return;
	}
}
