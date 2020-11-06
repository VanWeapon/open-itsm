import * as app from "../server/APIServer";
import * as request from "supertest";
import * as http from "http";
import { v4 } from "uuid";
import { createConnection, getConnection, getConnectionOptions } from "typeorm";

jest.setTimeout(20000);
beforeAll(async (done) => {
	const options = await getConnectionOptions(process.env.NODE_ENV);
	await createConnection({
		...options,
		name: process.env.NODE_ENV,
	});

	done();
});

afterAll(async (done) => {
	await getConnection(process.env.NODE_ENV).close();
	done();
});

describe("Record Endpoint", () => {
	const apptest = request(http.createServer(app.callback()));

	it("connects to server", async () => {
		const response = await apptest.get("/api/record/user");
		expect(response.status).toBe(200);
	});

	it("Queries for all users", async () => {
		const response = await apptest.get("/api/record/user");
		const body = response.body;
		expect(body).not.toBeNull();
		expect(body).toBeInstanceOf(Array);
	});

	it("Returns in Json content type", async () => {
		await apptest.get("/api/record/user").expect("Content-Type", /json/);
	});

	it("Has a task endpoint", async () => {
		await apptest.get("/api/record/task").expect(200);
	});

	it("Has group endpoint", async () => {
		await apptest.get("/api/record/group").expect(200);
	});

	it("Allows searching groups by membership", async () => {
		await apptest.get("/api/record/group_membership").expect(200);
	});

	it("Fails on bad table name", async () => {
		await apptest.get("/api/record/asjdlkfjasd").expect(404);
	});

	it("Fails on invalid record id", async () => {
		await apptest.get("/api/record/user/123").expect(400);
	});

	it("Fails on missing record ", async () => {
		const uuid = v4();
		await apptest.get(`/api/record/user/${uuid}`).expect(404);
	});

	it("gets child records in a parent table query", async () => {
		const testHw = {} as any;
		const testComp = {} as any;

		testHw.name = "Supertest hw";
		testHw.comments = "From supertest";
		testHw.serial_number = "hw456";
		testHw.environment = "test";

		testComp.name = "Supertest computer";
		testComp.comments = "From supertest";
		testComp.serial_number = "pc123";
		testComp.os = "win10";
		testComp.environment = "test";

		await apptest
			.post("/api/record/hw")
			.set({ "X-User": "tester" })
			.send(testHw)
			.then((response) => {
				console.log(response.error);
				console.log(response.body);
			});

		await apptest
			.post("/api/record/hw_computer")
			.set({ "X-User": "tester" })
			.send(testComp)
			.then((response) => {
				console.log(response.error);
				console.log(response.body);
			});

		await apptest.get("/api/record/hw").then((response) => {
			console.log(response.error);
			console.log(response.body);
		});
	});
});

describe("UI Endpoint", () => {
	const apptest = request(http.createServer(app.callback()));
	it("Has a ui endpoint for global actions", async () => {
		const response = await apptest
			.get("/api/ui/global/actions")
			.expect(200);

		const body = JSON.parse(response.body);
		expect(body).toHaveProperty("form");
		expect(body).toHaveProperty("list");
		expect(body).toHaveProperty("actions");
		expect(body.actions).not.toHaveLength(0);
	});

	it("Has a UI endpoint for incident", async () => {
		const response = await apptest.get("/api/ui/incident").expect(200);

		const body = JSON.parse(response.body);
		expect(body).toHaveProperty("form");
		expect(body).toHaveProperty("list");
		expect(body).toHaveProperty("actions");
	});
});

describe("Schema Endpoint", () => {
	const apptest = request(http.createServer(app.callback()));

	it("Has a schema endpoint for incident", async () => {
		const response = await apptest.get("/api/schema/incident").expect(200);

		const body = JSON.parse(response.body);
		expect(body instanceof Array).toBe(true);
		expect(body[0] instanceof Object).toBe(true);
		expect(body[0]).toHaveProperty("column_name");
		expect(body[0]).toHaveProperty("type");
		expect(body[0]).toHaveProperty("db_name");
	});
});
