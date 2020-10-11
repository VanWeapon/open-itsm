import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { Connection } from "typeorm";
import { Dictionary } from "../../database/entity/system/Dictionary";
import { Table } from "../../database/entity/system/Table";
import { UIAction } from "../../database/entity/system/UIAction";

export class UIAPI {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		connection: Connection
	): Promise<void> {
		const table = ctx.params.table;
		const property = ctx.params.property;

		if (!table && !property) {
			ctx.response.status = 400;
			ctx.response.body = "Table and Property not provided in request";
			await next();
			return;
		}

		if (table && !property) {
			ctx.response.body = await UIAPI.getAllProperties(table, connection);
			ctx.response.status = 200;
			await next();
			return;
		}

		if (table && property) {
			const result = await UIAPI.getAllProperties(table, connection);
			switch (property) {
				case "form":
					ctx.response.body = result.form;
					ctx.response.status = 200;
					break;
				case "list":
					ctx.response.body = result.list;
					ctx.response.status = 200;
					break;
				case "actions":
					ctx.response.body = result.actions;
					ctx.response.status = 200;
					break;
				default:
					ctx.response.status = 400;
					ctx.response.body =
						"Invalid property name provided, valid options are 'form', 'list', 'actions'";
			}
			await next();
			return;
		}
	}
	public static async post(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		_next: Next,
		connection: Connection
	): Promise<void> {
		connection.getRepository(Table);
	}
	public static async put(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		connection: Connection
	): Promise<void> {
		connection.getRepository(Table);
		await next();
	}
	public static async delete(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		connection: Connection
	): Promise<void> {
		connection.getRepository(Table);

		await next();
	}

	private static async getAllProperties(
		tableName: string,
		connection: Connection
	) {
		const tableEntity = await connection
			.getRepository(Table)
			.findOne({ name: tableName });
		// const fieldArray = connection.getRepository(tableName).metadata.columns;
		const fieldArray = connection
			.getRepository(Dictionary)
			.find({ where: { table: tableEntity } });
		const listArray = fieldArray; // TODO: Replace with actual list entries

		const actionArray = connection
			.getRepository(UIAction)
			.createQueryBuilder("action")
			.where("action.table = :table", { table: tableEntity!.guid })
			.orWhere("global = true")
			.getMany();

		const result = {
			form: await fieldArray,
			list: await listArray,
			actions: await actionArray,
		};

		return result;
	}
}
