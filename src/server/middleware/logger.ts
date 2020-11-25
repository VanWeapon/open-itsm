import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { SystemUtil } from "../../util/SystemUtil";
const gu = new SystemUtil();
export async function apiLogger(
	ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
	next: Next
) {
	await next();
	const rt = ctx.response.get("X-Response-Time");
	if (process.env.NODE_ENV !== "test") {
		gu.info(`${ctx.method} ${ctx.url} - ${rt}`);
	}
}
