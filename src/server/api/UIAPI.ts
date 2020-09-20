import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";

export class UIAPI {
	public static async get(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		_next: Next
	): Promise<void> {}
	public static async post(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		_next: Next
	): Promise<void> {}
	public static async put(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	): Promise<void> {
		await next();
	}
	public static async delete(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	): Promise<void> {
		await next();
	}
}
