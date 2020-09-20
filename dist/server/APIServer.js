"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const logger_1 = require("./middleware/logger");
const RecordAPI_1 = require("./api/RecordAPI");
const responsetime_1 = require("./middleware/responsetime");
const SchemaAPI_1 = require("./api/SchemaAPI");
const UIAPI_1 = require("./api/UIAPI");
function startServer(_connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new Koa();
        const router = new Router();
        app.use(logger_1.logger)
            .use(responsetime_1.responseTime)
            .use(bodyParser())
            .use(router.routes())
            .use(router.allowedMethods());
        router.get("/api/record/:table", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield RecordAPI_1.RecordAPI.get(ctx, next);
        }));
        router.post("/api/record/:table", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield RecordAPI_1.RecordAPI.post(ctx, next);
        }));
        router.put("/api/record/:table/:id", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield RecordAPI_1.RecordAPI.put(ctx, next);
        }));
        router.delete("/api/record/:table/:id", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield RecordAPI_1.RecordAPI.delete(ctx, next);
        }));
        router.get("/api/schema/:table", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield SchemaAPI_1.SchemaAPI.get(ctx, next);
        }));
        router.post("/api/schema", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield SchemaAPI_1.SchemaAPI.post(ctx, next);
        }));
        router.put("/api/schema/:table/:id", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield SchemaAPI_1.SchemaAPI.put(ctx, next);
        }));
        router.delete("/api/schema/:table/:id", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield SchemaAPI_1.SchemaAPI.delete(ctx, next);
        }));
        router.get("/api/ui/:table", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield UIAPI_1.UIAPI.get(ctx, next);
        }));
        router.get("/api/ui/:table/:property", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield UIAPI_1.UIAPI.get(ctx, next);
        }));
        router.post("/api/ui/:table/:property", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield UIAPI_1.UIAPI.post(ctx, next);
        }));
        router.put("/api/ui/:table/:property", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield UIAPI_1.UIAPI.put(ctx, next);
        }));
        router.delete("/api/ui/:table/:property", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            yield UIAPI_1.UIAPI.delete(ctx, next);
        }));
        app.listen(3000);
        console.log("Server Started");
    });
}
exports.startServer = startServer;
//# sourceMappingURL=APIServer.js.map