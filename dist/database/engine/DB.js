"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const Cursor = require("pg-cursor");
const formatSQL = require("pg-format");
class DB {
    constructor(client) {
        this.selectedTable = "";
        this.queryStringArray = [];
        this.client = client;
    }
    close() {
        this.client.end();
    }
    addQuery(fieldName, expectedValue, operator) {
        let sqlSelector = fieldName;
        let sqlValue = expectedValue;
        let sqlOperator = "";
        switch (operator) {
            case "=":
                sqlOperator = "=";
                break;
            default:
                sqlOperator = "=";
                break;
        }
        //SELECT * FROM table_name WHERE fieldName operator expectedValue
        let text = "WHERE %I %s %L";
        let values = [sqlSelector, sqlOperator, sqlValue];
        let escapedSQL = formatSQL.withArray(text, values);
        console.log(escapedSQL);
        this.queryStringArray.push(escapedSQL);
    }
    getFullSQL() {
        let fullSQL = `SELECT * FROM ${this.selectedTable} ${this.queryStringArray.join(" ")}`;
        return fullSQL;
    }
    insert(record) { }
    query() {
        console.log("Getting cursor with query: ");
        console.log(this.getFullSQL());
        this.cursor = this.client.query(new Cursor(this.getFullSQL()));
    }
    next() {
        let recordFound = false;
        new Promise((resolve, reject) => {
            this.cursor.read(1, (err, rows) => {
                if (err) {
                    reject(err);
                }
                if (!rows) {
                    this.client.end();
                    return false;
                }
                if (rows.length === 0) {
                    this.client.end();
                    resolve(false);
                }
                else {
                    this.selectedRecord = rows[0];
                    resolve(true);
                }
            });
        })
            .then((result) => recordFound)
            .catch((error) => console.error(error));
        console.log("Returning record found value of: " + recordFound);
        return recordFound;
    }
    async getAllTableRecords() {
        const data = await this.client.query(`SELECT * FROM ${this.selectedTable}`);
        return data.rows;
    }
    async initialise(className) {
        this.selectedTable = className;
        console.log("In DB, initialising...");
        let results = await this.client.query(`SELECT table_name FROM INFORMATION_SCHEMA.tables WHERE table_name = '${className}'`);
        console.log("Results from testing " + className);
        console.log(results);
        if (results.rows.length == 0)
            return false;
        else
            return true;
    }
    async getSchemaData() {
        let fieldData = await this.client.query(`SELECT * FROM INFORMATION_SCHEMA.columns WHERE table_name = '${this.selectedTable}'`);
        console.log(`Logging getSchemaData for ${this.selectedTable}`);
        console.log(fieldData.rows);
        return fieldData.rows;
    }
    update() { }
}
exports.DB = DB;
