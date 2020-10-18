import { getConnection } from "typeorm";
import { createServer } from "../../server/APIServer";
import * as request from "supertest";

afterAll(async (done) => {
	const c = getConnection(process.env.NODE_ENV);
	await c.close();
	done();
});

it("connects to server", async () => {
	console.log("Connecting to app");
	const app = await createServer(getConnection(process.env.NODE_ENV));
	console.log("Supertest request...");
	const result = await request(app).get("/api/record/user");
	console.log(result);

	expect(result).not.toBeNull();
});
