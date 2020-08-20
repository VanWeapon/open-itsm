"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTime = void 0;
async function responseTime(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set("X-Response-Time", `${ms}ms`);
}
exports.responseTime = responseTime;
