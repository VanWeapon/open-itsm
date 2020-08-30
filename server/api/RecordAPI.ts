import { DB } from "../../database/engine/DB";
import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { Client, Pool } from "pg";

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
		const engine = new DB(client);
		engine.initialise(tableName);

		try {
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
		next();
	}
}
