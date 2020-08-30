/**
 * SchemaAPI will get data definitions of the database tables
 * E.g.
 * /api/schema/incident
 * Will return all the field names, field types, of the incident table
 * WIll return properties of the table, such as mandatory fields, primary/foreign keys etc
 */

import { DB } from "../../database/engine/DB";
import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { Client, Pool } from "pg";

export class SchemaAPI {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {
		const tableName = ctx.params.table;
		console.log(ctx.params);

		const engine = new DB(client);
		let validTable = await engine.initialise(tableName);

		if (!validTable) {
			ctx.response.status = 404;
			ctx.response.body = `Table with name ${tableName} does not exist`;
			await next();
			return;
		}

		const schema = await engine.getSchemaData();
		ctx.response.status = 200;
		ctx.response.body = schema;
		await next();
	}
	public static async post(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {
		const engine = new DB(client);
		engine.initialise("test");
	}
	public static async put(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {
		const engine = new DB(client);
		engine.initialise("test");
	}
	public static async delete(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {
		const engine = new DB(client);
		engine.initialise("test");
	}
}
