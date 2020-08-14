export async function logger(context, next) {
	await next();
	console.log(context);
}
