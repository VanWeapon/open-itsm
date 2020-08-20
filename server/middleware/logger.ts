import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";

export async function logger(
	ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
	next: Next
) {
	await next();
	const rt = ctx.response.get("X-Response-Time");
	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}
