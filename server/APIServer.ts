import Koa from "koa";
import Router from "koa-router";
// const bodyParser = require("koa-bodyparser");
import bodyParser from "koa-bodyparser";
const app = new Koa();
const router = new Router();
import { logger } from "./middleware/logger";
import { DBConnector } from "./api/DBConnector";
import { responseTime } from "./middleware/responsetime";
// logger
app.use(logger)
	.use(responseTime)
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods());

router.get("/:table", DBConnector.get);

router.post("/:table", DBConnector.post);

router.put("/:table", DBConnector.put);

router.delete("/:table", DBConnector.delete);

app.listen(3000);
console.log("Server started");
