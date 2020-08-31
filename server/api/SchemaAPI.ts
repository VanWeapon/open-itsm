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
import { SchemaBody, SchemaField, FieldType } from "../../shared/TableSchema";
import { Result } from "./Validator";
import { fail } from "assert";

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
		console.log(ctx.request.body);

		const body = ctx.request.body as SchemaBody;
		const engine = new DB(client);

		console.log("validating schema");

		let result = await SchemaAPI.validateSchemaBody(body, engine);
		let cleanBody;

		if (!result.ok) {
			ctx.response.status = 400;
			ctx.response.body = result.message;
			await next();
			return;
		}

		console.log("Validation result ok: " + result.ok);

		cleanBody = result.value;

		let tableExists = await engine.testTableExists(cleanBody.name);
		if (tableExists) {
			ctx.response.status = 400;
			ctx.response.body = `Table with name ${body.name} already exists, duplicate entry aborted`;
			await next();
			return;
		}

		let tableCreated = await engine.createTable(body);
		if (tableCreated) {
			ctx.response.status = 201;
			ctx.response.body = `${cleanBody.name} table created successfully`;
			await next();
			return;
		}
	}

	private static async validateSchemaBody(
		body: SchemaBody,
		engine: DB
	): Promise<Result<SchemaBody>> {
		if (!body.name) {
			return {
				ok: false,
				message: "Name not present",
			};
		}

		if (!body.label) {
			return {
				ok: false,
				message: "Label not present",
			};
		}

		if (body.extends && typeof body.extends != "string") {
			return {
				ok: false,
				message: `Invalid extends value: ${body.extends}`,
			};
		}

		if (body.extends) {
			let extendsExists = await engine.testTableExists(body.extends);
			if (!extendsExists) {
				return {
					ok: false,
					message: `Invalid table name for extends ${body.extends}`,
				};
			}
		}

		let cleanFields: SchemaField[] = [];
		if (body.fields) {
			let anyFailed = false;
			let failureMessages: string[] = [];
			for (const field of body.fields) {
				let validationResult = await SchemaAPI.validateSchemaField(
					field,
					engine
				);
				if (validationResult.ok === false) {
					anyFailed = true;
					failureMessages.push(validationResult.message);
				} else {
					cleanFields.push(validationResult.value);
				}
			}
			if (anyFailed) {
				return {
					ok: false,
					message:
						"Fields did not match validation rules: " +
						failureMessages.join("\n"),
				};
			}
		}

		return {
			ok: true,
			value: {
				name: body.name,
				label: body.label,
				fields: cleanFields,
				extends: body.extends,
				number: body.number,
			},
		};
	}

	private static async validateSchemaField(
		field: SchemaField,
		engine: DB
	): Promise<Result<SchemaField>> {
		if (!field.name || !field.type || !field.label) {
			return {
				ok: false,
				message: `Invalid field defintion: ${JSON.stringify(field)}`,
			};
		}
		if (field.type == FieldType.REFERENCE && !field.reference) {
			return {
				ok: false,
				message: `Reference fields must have a referenced table name provided for ${field.name}`,
			};
		}

		if (field.type == FieldType.REFERENCE && field.reference) {
			let referenceTableExists = await engine.testTableExists(
				field.reference
			);
			if (!referenceTableExists) {
				return {
					ok: false,
					message: `Referenced table ${field.reference} is not a valid table`,
				};
			}
		}

		// Remove unwanted fields from the parsed object, could be bad juju
		let cleanField: SchemaField = {
			name: field.name,
			type: field.type,
			label: field.label,
			reference: field.reference || undefined,
		};
		return {
			ok: true,
			value: cleanField,
		};
	}

	public static async put(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {
		const body = ctx.request.body;
		const engine = new DB(client);

		let valid = await SchemaAPI.validateSchemaBody(body, engine);
		let cleanBody;

		if (!valid.ok) {
			ctx.response.status = 400;
			ctx.response.body = valid.message;
			await next();
			return;
		}
		cleanBody = valid.value;

		const tableName = cleanBody.name;
	}
	public static async delete(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {}
}
