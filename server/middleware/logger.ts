export async function logger(ctx, next) {
	await next();
	const rt = ctx.response.get("X-Response-Time");
	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}
