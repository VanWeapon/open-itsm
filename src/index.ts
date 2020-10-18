import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import * as app from "./server/APIServer";
import { createConnection, getConnectionOptions } from "typeorm";

const start = async () => {
	console.log("Starting...");
	console.log("Creating db connection");
	const options = await getConnectionOptions(process.env.NODE_ENV);
	const c = await createConnection({
		...options,
		name: process.env.NODE_ENV,
	});
	console.log("Db connection created: " + c.isConnected + " " + c.name);

	console.log("Starting server...");

	const port = process.env.PORT || 3000;
	app.listen(port);
	console.log(`Server listening on ${port}`);
};

start();
