import { createConnection, getConnection, getConnectionOptions } from "typeorm";
import * as app from "../../server/APIServer";
import * as request from "supertest";
import * as http from "http";
import { v4 } from "uuid";
beforeAll(async (done) => {
	console.log("Connecting to db");
	const opts = await getConnectionOptions(process.env.NODE_ENV);
	await createConnection({ ...opts, logging: false });
	done();
});

afterAll(async (done) => {
	const c = getConnection(process.env.NODE_ENV);
	await c.close();
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
});
