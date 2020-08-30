import { Connection, Client, Pool } from "node-postgres";
import { resolve } from "path";
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

	public insert(record: string | object) {}

	public query() {
		console.log("Getting cursor with query: ");
		console.log(this.getFullSQL());

		this.cursor = this.client.query(new Cursor(this.getFullSQL()));
	}

	public next(): boolean {
		let recordFound = false;
		new Promise((resolve, reject) => {
			this.cursor.read(1, (err: any, rows: string | any[]) => {
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
				} else {
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

	public async getAllTableRecords(): Promise<any[] | undefined> {
		const data = await this.client.query(
			`SELECT * FROM ${this.selectedTable}`
		);
		return data.rows;
	}

	public async initialise(className: string): Promise<boolean> {
		this.selectedTable = className;

		console.log("In DB, initialising...");

		let results = await this.client.query(
			`SELECT table_name FROM INFORMATION_SCHEMA.tables WHERE table_name = '${className}'`
		);

		console.log("Results from testing " + className);

		console.log(results);

		if (results.rows.length == 0) return false;
		else return true;
	}

	public async getSchemaData(): Promise<any[]> {
		let fieldData = await this.client.query(
			`SELECT * FROM INFORMATION_SCHEMA.columns WHERE table_name = '${this.selectedTable}'`
		);

		console.log(`Logging getSchemaData for ${this.selectedTable}`);
		console.log(fieldData.rows);

		return fieldData.rows;
	}

	public update() {}
}
