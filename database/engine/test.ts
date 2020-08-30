import { DB } from "./DB";

require("dotenv").config();
import { Client } from "pg";

const client = new Client({ ssl: false });

client.connect().then(() => {
	runCode(client);
});

function runCode(client: Client) {
	const db = new DB(client);
	db.initialise("incident");

	db.addQuery("number", "INC000123");

	db.query();
	console.log(db.next());
}
