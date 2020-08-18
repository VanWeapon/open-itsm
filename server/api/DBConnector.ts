import { DB } from "../../database/engine/DB";
import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { SystemFile } from "../../shared/schemas/SystemFile";
import { Incident } from "../../shared/schemas/Incident";
import { Task } from "../../shared/schemas/Task";
import { Table } from "../../shared/schemas/Table";
import { User } from "../../shared/schemas/User";
import { Role } from "../../shared/schemas/Role";
import * as util from "util";
export class DBConnector {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const tableName = ctx.params.table;
		console.log("Received get request for " + tableName);
		console.log("Loading DB engine");
		const engine = DBConnector.initDatabaseByName(tableName);

		try {
			console.log("Trying to load all data");
			let docs = await engine.loadAll();
			ctx.response.body = JSON.stringify(docs);
		} catch (e) {
			console.error(e);
			ctx.response.status = 400;
			ctx.response.body = e;
		} finally {
			next();
		}
	}

	public static async post(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const tableName = ctx.params.table;
		const engine = DBConnector.initDatabaseByName(tableName);

		try {
			console.log("Trying to insert record to Database");
			let newFile = DBConnector.classFactory(tableName);
			console.log(
				"Factory produced a new File: " + util.inspect(newFile)
			);
			let fields = ctx.request.body as object;
			console.log("Received fields: " + JSON.stringify(fields, null, 2));
			for (var field in fields) {
				console.log(
					`Attempting to set ${field} to value ${fields[field]}`
				);
				newFile.setValue(field, fields[field]);
			}
			console.log("Inserting new file: " + util.inspect(newFile));
			engine.insert(newFile);
			ctx.response.status = 201;
			ctx.response.body = `New ${newFile.getClassName()} ${newFile.getValue(
				"guid"
			)} successfully inserted`;
		} catch (e) {
			console.error(e);
			ctx.response.body = e;
			ctx.response.status = 400;
		} finally {
			next();
		}
	}

	public static async put(ctx, next) {}

	public static async delete(ctx, next) {}

	private static initDatabaseByName(table: string): DB {
		//static implementation for POC only
		const engine = new DB();
		engine.initialise(table);
		return engine;
	}

	private static classFactory(className: string): SystemFile {
		//In order to dynamically generate Classes we must map them first by name
		const map = {
			incident: Incident,
			task: Task,
			s_user: User,
			s_file: SystemFile,
			s_role: Role,
			s_dbo: Table,
		};

		let cls = map[className] || null;
		if (!cls) return null;

		return new cls();
	}
}
