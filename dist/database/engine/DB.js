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
    async insert(record) {
        console.log("Inserting : " + JSON.stringify(record));
        let fieldNames = [];
        let fieldValues = [];
        for (const field in record) {
            fieldNames.push(field);
            fieldValues.push(record[field]);
        }
        let insertString = `
		INSERT INTO ${this.selectedTable} (
			${fieldNames.join(", ")}
		)
		VALUES (
			'${fieldValues.join("', '")}'
		);
		`;
        let findString = `
		SELECT * FROM ${this.selectedTable}
		ORDER BY created DESC
		LIMIT 1;
		`;
        console.log(insertString);
        await this.client.query(insertString);
        let insertedRecord = await this.client.query(findString);
        return insertedRecord.rows[0];
    }
    async query() {
        console.log("Getting cursor with query: ");
        console.log(this.getFullSQL());
        this.cursor = this.client.query(new Cursor(this.getFullSQL()));
    }
    async get(guid) {
        let record = await this.client.query(`SELECT * FROM ${this.selectedTable} WHERE guid = '${guid}';`);
        if (record.rowCount === 1) {
            this.selectedRecord = record.rows[0].guid;
            return record.rows[0];
        }
        else {
            return null;
        }
    }
    async delete() {
        let deleted = await this.client.query(`DELETE FROM ${this.selectedTable}
			WHERE guid = '${this.selectedRecord}'`);
        console.log(deleted);
        return deleted.rowCount === 1;
    }
    async next() {
        let recordFound = false;
        return recordFound;
    }
    async getAllTableRecords() {
        const data = await this.client.query(`SELECT * FROM ${this.selectedTable}`);
        return data.rows;
    }
    async initialise(tableName) {
        this.selectedTable = tableName;
        let results = await this.client.query(`SELECT table_name FROM INFORMATION_SCHEMA.tables WHERE table_name = '${tableName}'`);
        return results.rowCount > 0;
    }
    async getSchemaData() {
        let fieldData = await this.client.query(`SELECT * FROM INFORMATION_SCHEMA.columns WHERE table_name = '${this.selectedTable}'`);
        return fieldData.rows;
    }
    async createTable(body) {
        return true;
    }
    async testTableExists(tableName) {
        let result = await this.client.query(`SELECT table_name FROM INFORMATION_SCHEMA.tables WHERE table_name = '${tableName}'`);
        return result.rowCount > 0;
    }
    update() { }
}
exports.DB = DB;
