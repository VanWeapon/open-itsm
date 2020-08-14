import { SystemFile } from "../../schemas/SystemFile";

const dbSettings = require("../settings.json");

export class DB {
	private connectionString: string = dbSettings.connectionString;
	private dbName: string = dbSettings.dbName;
	private db;
	private client;
	private file: SystemFile;
	constructor(file: SystemFile) {
		this.file = file;
		this.initialiseConnection();
	}

	public insert() {}

	public update() {}

	private async initialiseConnection() {}
}
