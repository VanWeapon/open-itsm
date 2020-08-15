import { SystemFile } from "../../schemas/SystemFile";

const dbSettings = require("../settings.json");
import * as Datastore from "nedb";
import * as path from "path";
import * as util from "util";

export class DB {
	private connectionString: string = dbSettings.connectionString;
	private dbName: string = dbSettings.dbName;
	private db: Datastore;
	private client;
	private file: SystemFile;
	constructor(file?: SystemFile) {
		if (file) {
			this.file = file;
			this.dbName = this.getFilePath();

			this.db = new Datastore(this.dbName);
			this.db.loadDatabase();
		}
	}

	public insert(file?: SystemFile) {
		console.log("Inserting file: ");
		if (!file) {
			console.log(util.inspect(this.file));
			this.db.insert(this.file);
		} else {
			console.log(util.inspect(file));

			this.db.insert(file);
		}
	}

	public loadDatabase(className) {
		this.dbName = this.getFilePath(className);
		this.db = new Datastore(this.dbName);
		this.db.loadDatabase();
	}

	public update() {}

	private async initialiseConnection() {}

	private getFilePath(className?: string) {
		let fileName: string;
		if (!className) fileName = this.file.getClassName() + ".db";
		else fileName = className + ".db";
		let dataLocation = path.resolve("./database/data/");
		let dataFile = path.join(dataLocation, fileName);
		return dataFile;
	}
}
