import * as app from "../server/APIServer";
import * as request from "supertest";
import * as http from "http";
import { v4 } from "uuid";
import { SystemUtil } from "../util/SystemUtil";
import { DBUtil } from "../util/DBUtil";
jest.setTimeout(20000);
const db = new DBUtil();
const su = new SystemUtil();

beforeAll(async (done) => {
	await db.connect();
	done();
});

afterAll(async (done) => {
	su.sleep(1500); // let the db connection calm down
	await db.disconnect();
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
		const response = await apptest.get("/api/record/user");
		expect(response.headers["content-type"]).toMatch(/json/);
	});

	it("Has a task endpoint", async () => {
		const response = await apptest.get("/api/record/task");
		expect(response.status).toBe(200);
	});

	it("Has group endpoint", async () => {
		const response = await apptest.get("/api/record/group");
		expect(response.status).toBe(200);
	});

	it("Allows searching groups by membership", async () => {
		const response = await apptest.get("/api/record/group_membership");
		expect(response.status).toBe(200);
	});

	it("Fails on bad table name", async () => {
		const response = await apptest.get("/api/record/asjdlkfjasd");
		expect(response.status).toBe(404);
	});

	it("Fails on invalid record id", async () => {
		const response = await apptest.get("/api/record/user/123");
		expect(response.status).toBe(400);
	});

	it("Fails on missing record ", async () => {
		const uuid = v4();
		const response = await apptest.get(`/api/record/user/${uuid}`);
		expect(response.status).toBe(404);
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
				su.error(response.error);
				su.info(response.body);
			});

		await apptest
			.post("/api/record/hw_computer")
			.set({ "X-User": "tester" })
			.send(testComp)
			.then((response) => {
				su.error(response.error);
				su.info(response.body);
			});

		await apptest.get("/api/record/hw").then((response) => {
			su.error(response.error);
			su.info(response.body);
		});
	});
});

describe("UI Endpoint", () => {
	const apptest = request(http.createServer(app.callback()));

	// TODO: build global endpoint
	it("Has a ui endpoint for global actions", async () => {
		const response = await apptest.get("/api/ui/global/actions");
		expect(response.status).toBe(200);

		const body = JSON.parse(response.body);
		expect(body).toHaveProperty("form");
		expect(body).toHaveProperty("list");
		expect(body).toHaveProperty("actions");
		expect(body.actions).not.toHaveLength(0);
	});

	it("Has a UI endpoint for incident", async () => {
		const response = await apptest.get("/api/ui/incident");

		expect(response.status).toBe(200);

		const body = response.body;
		expect(body).toHaveProperty("form");
		expect(body).toHaveProperty("list");
		expect(body).toHaveProperty("actions");
	});
});

describe("Schema Endpoint", () => {
	const apptest = request(http.createServer(app.callback()));

	// TODO: Fix endpoints for extended tables
	it("Has a schema endpoint for incident", async () => {
		const response = await apptest.get("/api/schema/incident");
		su.info("Schema response body");
		su.info(response.body);

		expect(response.status).toBe(200);

		const body = response.body;
		expect(body instanceof Array).toBe(true);
		expect(body[0] instanceof Object).toBe(true);
		expect(body[0]).toHaveProperty("column_name");
		expect(body[0]).toHaveProperty("type");
		expect(body[0]).toHaveProperty("db_name");
	});
});
