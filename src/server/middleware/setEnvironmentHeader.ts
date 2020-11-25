import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";

export async function setEnvironmentHeader(
	ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
	next: Next
) {
	ctx.set("X-OpenITSM-Environment", process.env.NODE_ENV || "");
	await next();
}
