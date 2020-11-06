import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { loadCoreData } from "./LoadCoreData";
import { loadSystemData } from "./LoadSystemData";
import { loadItsmData } from "./LoadITSMData";
import { clearData } from "./ClearAll";
import {
	Connection,
	createConnection,
	getConnection,
	getConnectionOptions,
} from "typeorm";
import { loadCMDBData } from "./LoadCMDBData";

const start = async () => {
	let connection: Connection;

	try {
		connection = getConnection(process.env.NODE_ENV);
	} catch (e) {
		const options = await getConnectionOptions(process.env.NODE_ENV);
		connection = await createConnection({
			...options,
			logging: ["warn", "error"],
			name: process.env.NODE_ENV,
		});
	}

	await clearData();
	await loadSystemData();
	await loadCoreData();
	await loadCMDBData();
	await loadItsmData();
	// setTimeout(async () => {
	// 	await connection.close();
	// }, 1000);
	// // await connection.close();
	connection.close();
};

start();
