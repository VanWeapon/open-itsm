import { Connection, Client, Pool } from "node-postgres";
import { SchemaBody } from "../../shared/TableSchema";
const Cursor = require("pg-cursor");
const formatSQL = require("pg-format");

export class DB {
	private client: Client | Pool;
	private selectedTable: string = "";
	private cursor: any;
	private selectedRecord: any;
	private queryStringArray: string[] = [];
	constructor(client: Client | Pool) {
		this.client = client;
	}

	private close() {
		this.client.end();
	}

	public addQuery(
		fieldName: string,
		expectedValue: string,
		operator?: string
	) {
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

	private getFullSQL() {
		let fullSQL = `SELECT * FROM ${
			this.selectedTable
		} ${this.queryStringArray.join(" ")}`;
		return fullSQL;
	}

	public async insert(record: { [index: string]: any }): Promise<any> {
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

	public async query() {
		console.log("Getting cursor with query: ");
		console.log(this.getFullSQL());

		this.cursor = this.client.query(new Cursor(this.getFullSQL()));
	}

	public async get(guid: string): Promise<any> {
		let record = await this.client.query(
			`SELECT * FROM ${this.selectedTable} WHERE guid = '${guid}';`
		);
		if (record.rowCount === 1) {
			this.selectedRecord = record.rows[0].guid;
			return record.rows[0];
		} else {
			return null;
		}
	}

	public async delete(): Promise<boolean> {
		let deleted = await this.client.query(
			`DELETE FROM ${this.selectedTable}
			WHERE guid = '${this.selectedRecord}'`
		);

		console.log(deleted);
		return deleted.rowCount === 1;
	}

	public async next(): Promise<boolean> {
		let recordFound = false;
		return recordFound;
	}

	public async getAllTableRecords(): Promise<any[] | undefined> {
		const data = await this.client.query(
			`SELECT * FROM ${this.selectedTable}`
		);
		return data.rows;
	}

	public async initialise(tableName: string): Promise<boolean> {
		this.selectedTable = tableName;

		let results = await this.client.query(
			`SELECT table_name FROM INFORMATION_SCHEMA.tables WHERE table_name = '${tableName}'`
		);

		return results.rowCount > 0;
	}

	public async getSchemaData(): Promise<any[]> {
		let fieldData = await this.client.query(
			`SELECT * FROM INFORMATION_SCHEMA.columns WHERE table_name = '${this.selectedTable}'`
		);
		return fieldData.rows;
	}

	public async createTable(body: SchemaBody): Promise<boolean> {
		return true;
	}

	public async testTableExists(tableName: string): Promise<boolean> {
		let result = await this.client.query(
			`SELECT table_name FROM INFORMATION_SCHEMA.tables WHERE table_name = '${tableName}'`
		);

		return result.rowCount > 0;
	}

	public update() {}
}
