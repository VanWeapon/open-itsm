import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();

import { createConnection, getConnection, getConnectionOptions } from "typeorm";
import { Incident } from "../database/entity/itsm/Incident";
import { Dictionary } from "../database/entity/system/Dictionary";
import { Table } from "../database/entity/system/Table";

jest.setTimeout(20000);
beforeAll((done) => {
	getConnectionOptions(process.env.NODE_ENV)
		.then((opts) => {
			createConnection({
				...opts,
				name: process.env.NODE_ENV,
				logging: false,
			});
		})
		.then(() => {
			done();
		});
});

afterAll(async (done) => {
	const c = getConnection(process.env.NODE_ENV);
	await c.close();
	done();
});

describe("System records", () => {
	const connection = getConnection(process.env.NODE_ENV);
	it("connects to db", async () => {
		expect(connection.isConnected).toBe(true);
	});

	it("gets records from system.dbo", async () => {
		const table = await connection.getRepository(Table).findOne();

		expect(table?.class_name).toBe("dbo");
	});

	it("gets records from system.dictionary", async () => {
		const dictionary = await connection.getRepository(Dictionary).findOne();
		expect(dictionary?.class_name).toBe("dictionary");
	});

	it("sets scope properly", async () => {
		const inc = await connection.getRepository(Incident).findOne();
		expect(inc?.scope).toBe("itsm");
		expect(inc?.class_name).toBe("incident");
	});
});
