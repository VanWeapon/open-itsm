import { ParameterizedContext, Next } from "koa";
import { Client } from "pg";
import { IRouterParamContext } from "koa-router";
import { Pool } from "node-postgres";
import { DB } from "../../database/engine/DB";

export class UIAPI {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next,
		client: Client | Pool
	): Promise<void> {
		const engine = new DB(client);
		engine.initialise("test");
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
