import Datastore from "nedb";
import * as path from "path";
import * as util from "util";
import { SystemFile } from "../../shared/schemas/SystemFile";
import { FileManager } from "../../server/api/FileManager";

export interface DBConfig {
	dbPath?: string;
	dbFileName?: string;
	connectionString?: string;
	file?: SystemFile;
}

export class DB {
	private connectionString: string;
	private dbFileName: string;
	private dbPath: string = path.resolve(
		FileManager.projectRoot,
		"/database/data"
	);
	private dbFullPath: string;
	private db: Datastore;
	private client;
	private file: SystemFile;
	constructor(config?: DBConfig) {
		if (!config) {
			return;
		}
		if (config.dbPath) this.dbPath = config.dbPath;
		if (config.dbFileName) this.dbFileName = config.dbFileName;
		if (config.connectionString)
			this.connectionString = config.connectionString;

		if (config.file) {
			this.file = config.file;
			if (!this.dbFullPath) this.dbFullPath = this.getFilePathFromClass();

			this.db = new Datastore(this.dbFullPath);
			this.db.loadDatabase();
		} else if (config.dbFileName) {
			this.initialise(config.dbFileName);
		}
		console.debug("DB Initialised from file: " + this.dbFullPath);
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

	public initialise(className: string) {
		this.dbFullPath = this.getFilePathFromClass(className);
		this.db = new Datastore(this.dbFullPath);
		this.db.loadDatabase();
		console.debug("DB Initialised from file: " + this.dbFullPath);
	}

	public async loadRecord(fieldName, fieldValue): Promise<string> {
		if (!this.db) {
			throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
		}
		var query = {};
		query[fieldName] = fieldValue;
		return new Promise((resolve, reject) => {
			this.db.findOne(query, (err, document) => {
				if (err) {
					reject(err);
				} else {
					resolve(document);
				}
			});
		});
	}

	public async loadAll(): Promise<string[]> {
		if (!this.db) {
			throw "No db";
		}
		return new Promise((resolve, reject) => {
			try {
				this.db.find({}, (err, docs) => {
					if (err) {
						reject(err);
					} else {
						resolve(docs);
					}
				});
			} catch (e) {
				reject(e);
			}
		});
	}

	public update() {}

	private getFilePathFromClass(className?: string) {
		let fileName: string;
		if (!className) fileName = this.file.getClassName() + ".db";
		else fileName = className + ".db";

		let dataLocation = path.resolve(this.dbPath);

		let dataFile = path.join(dataLocation, fileName);
		return dataFile;
	}
}
