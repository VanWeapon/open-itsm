import * as path from "path";
if (!process.env.projectRoot) {
	process.env.projectRoot = path.resolve("./");
}
console.log("Project root from APIServer.ts " + process.env.projectRoot);

import Koa from "koa";
import Router from "koa-router";
// const bodyParser = require("koa-bodyparser");
import bodyParser from "koa-bodyparser";
const app = new Koa();
const router = new Router();
import { logger } from "./middleware/logger";
import { DBConnector } from "./api/DBConnector";
import { responseTime } from "./middleware/responsetime";
import { FileManager } from "./api/FileManager";

console.log("Process root from FileManager " + FileManager.projectRoot);
// logger
app.use(logger)
	.use(responseTime)
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods());

router.get("/api/record/:table", DBConnector.get);
router.post("/api/record/:table", DBConnector.post);
router.put("/api/record/:table", DBConnector.put);
router.delete("/api/record/:table", DBConnector.delete);

router.post("/api/file", FileManager.createFile);
router.put("/api/file/:table", FileManager.updateFile);
router.get("/api/file", FileManager.getFiles);
router.get("/api/file/:table", FileManager.getFileByName);

app.listen(3000);
console.log("Server started");
