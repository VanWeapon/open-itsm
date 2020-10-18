import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { createServer } from "./server/APIServer";
import { createConnection, getConnectionOptions } from "typeorm";

const start = async () => {
	const options = await getConnectionOptions(process.env.NODE_ENV);
	const connection = await createConnection({ ...options, name: "default" });
	const app = await createServer(connection);
	app.listen(3000);
};

start();
