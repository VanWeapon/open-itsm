import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { loadCoreData } from "./LoadCoreData";
import { loadSystemData } from "./LoadSystemData";
import { loadItsmData } from "./LoadITSMData";
import { clearData } from "./ClearAll";
import { createConnection, getConnection, getConnectionOptions } from "typeorm";

const start = async () => {
	let connection;

	try {
		connection = getConnection(process.env.NODE_ENV);
	} catch (e) {
		const options = await getConnectionOptions(process.env.NODE_ENV);
		connection = await createConnection({
			...options,
			name: process.env.NODE_ENV,
		});
	}

	await clearData();
	await loadSystemData();
	await loadCoreData();
	await loadItsmData();
	await connection.close();
};

start();
