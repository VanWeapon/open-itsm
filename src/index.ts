import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import * as app from "./server/APIServer";
import { SystemUtil } from "./util/SystemUtil";
import { DBUtil } from "./util/DBUtil";
const su = new SystemUtil();
const db = new DBUtil();
const start = async () => {
	su.debug("Starting...");
	su.info("Creating db connection");
	const c = await db.connect();
	if (!c) {
		throw new Error("Unable to connect to database");
	}
	su.debug("Db connection created: " + c.isConnected + " " + c.name);

	su.info("Starting server...");

	const port = process.env.PORT || 3000;
	app.listen(port);
	su.info(`Server listening on ${port}`);
};

start();
