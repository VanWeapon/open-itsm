"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
async function logger(ctx, next) {
    await next();
    const rt = ctx.response.get("X-Response-Time");
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}
exports.logger = logger;
