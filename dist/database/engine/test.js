"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("./DB");
require("dotenv").config();
const pg_1 = require("pg");
const client = new pg_1.Client({ ssl: false });
client.connect().then(() => {
    runCode(client);
});
function runCode(client) {
    const db = new DB_1.DB(client);
    db.initialise("incident");
    db.addQuery("number", "INC000123");
    db.query();
    console.log(db.next());
}
