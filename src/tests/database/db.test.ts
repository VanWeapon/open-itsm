import { createConnection, getConnection, getConnectionOptions } from "typeorm";

// beforeAll(async (done) => {
// 	const options = await getConnectionOptions(process.env.NODE_ENV);
// 	await createConnection({ ...options, name: "test" });
// 	done();
// });

afterAll(async () => {
	const c = getConnection(process.env.NODE_ENV);
	await c.close();
});

// beforeEach(async () => {
// 	const c = getConnection(process.env.NODE_ENV);
// 	const entities = c.entityMetadatas;

// 	entities.forEach(async (entity) => {
// 		const repo = c.getRepository(entity.name);
// 		await repo.query(`TRUNCATE ${entity.tableName} CASCADE`);
// 	});
// });

it("connects to db", async () => {
	const options = await getConnectionOptions(process.env.NODE_ENV);
	const c = await createConnection({ ...options, name: "test" });
	c.query("SELECT * FROM system.s_dbo LIMIT 1");
	console.log("connected to test db");
	expect(true).toBe(true);
});
