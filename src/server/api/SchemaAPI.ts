/**
 * SchemaAPI will get data definitions of the database tables
 * E.g.
 * /api/schema/incident
 * Will return all the field names, field types, of the incident table
 * WIll return properties of the table, such as mandatory fields, primary/foreign keys etc
 */

import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { execSync } from "child_process";
import { EntityJSON, EntityGenerator } from "./EntityGenerator";
// import { getConnectionOptions } from "typeorm";
export class SchemaAPI {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	): Promise<void> {
		const tableName = ctx.params.table || null;

		if (!tableName) {
			ctx.status = 400;
			ctx.body = "No table name provided";
			await next();
			return;
		}

		next();
	}

	public static async post(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	): Promise<void> {
		const newEntity = ctx.request.body as EntityJSON;
		const validEntityJSON = EntityGenerator.validateJSON(newEntity);
		if (!validEntityJSON) {
			ctx.status = 400;
			ctx.body = "Invalid body";
			return;
		}

		const entityCreated = await EntityGenerator.generateFromJSON(newEntity);

		if (!entityCreated) {
			ctx.status = 400;
			ctx.body = "Invalid body";
			return;
		}
		// TODO: Create a status api endpoint and handle asynchronously

		console.log(
			execSync(
				"ts-node .\\node_modules\\typeorm\\cli.js -c development migration:run"
			).toString("utf8")
		);

		console.log(
			execSync(
				"ts-node .\\node_modules\\typeorm\\cli.js -c development migration:generate -n " +
					newEntity.label
			).toString("utf8")
		);

		console.log(
			execSync(
				"ts-node .\\node_modules\\typeorm\\cli.js -c development migration:run"
			).toString("utf8")
		);

		await next();
	}

	public static async put(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		_next: Next
	): Promise<void> {}
	public static async delete(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		_next: Next
	): Promise<void> {}
}
