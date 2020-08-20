"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
if (!process.env.projectRoot) {
    // process.env.projectRoot = path.resolve("./");
    process.env.projectRoot = process.env.PWD;
}
console.log("Project root from APIServer.ts " + process.env.projectRoot);
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
// const bodyParser = require("koa-bodyparser");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const logger_1 = require("./middleware/logger");
const DBConnector_1 = require("./api/DBConnector");
const responsetime_1 = require("./middleware/responsetime");
const FileManager_1 = require("./api/FileManager");
console.log("Process root from FileManager " + FileManager_1.FileManager.projectRoot);
function startServer() {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    // logger
    app.use(logger_1.logger)
        .use(responsetime_1.responseTime)
        .use(koa_bodyparser_1.default())
        .use(router.routes())
        .use(router.allowedMethods());
    router.get("/api/record/:table", DBConnector_1.DBConnector.get);
    router.post("/api/record/:table", DBConnector_1.DBConnector.post);
    router.put("/api/record/:table", DBConnector_1.DBConnector.put);
    router.delete("/api/record/:table", DBConnector_1.DBConnector.delete);
    router.post("/api/file", FileManager_1.FileManager.createFile);
    router.put("/api/file/:table", FileManager_1.FileManager.updateFile);
    router.get("/api/file", FileManager_1.FileManager.getFiles);
    router.get("/api/file/:table", FileManager_1.FileManager.getFileByName);
    app.listen(3000);
    console.log("Server started");
}
exports.startServer = startServer;
