import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";

export async function responseTime(
	ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
	next: Next
) {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set("X-Response-Time", `${ms}ms`);
}
