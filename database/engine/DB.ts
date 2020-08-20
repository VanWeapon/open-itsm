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
	private connectionString: string = "";
	private dbFileName: string = "";
	private dbPath: string = path.resolve(
		FileManager.projectRoot,
		"/database/data"
	);
	private dbFullPath: string = "";
	private db: Datastore | undefined;
	private client: undefined;
	private file: SystemFile | undefined;
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
		if (!this.db)
			throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
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

	public async loadRecord(
		fieldName: string,
		fieldValue: string
	): Promise<string> {
		var query: { [index: string]: any } = {};
		query[fieldName] = fieldValue;
		return new Promise((resolve, reject) => {
			if (!this.db) {
				throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
			}
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
		return new Promise((resolve, reject) => {
			try {
				if (!this.db) {
					throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
				}
				this.db.find(
					{},
					(
						err: any,
						docs: string[] | PromiseLike<string[]> | undefined
					) => {
						if (err) {
							reject(err);
						} else {
							resolve(docs);
						}
					}
				);
			} catch (e) {
				reject(e);
			}
		});
	}

	public update() {}

	private getFilePathFromClass(className?: string) {
		let fileName: string;
		if (!className && !this.file) {
			throw "DB connector is not initialised with a file, you need to pass a className parameter to this method";
		}
		if (!className && this.file) {
			fileName = this.file.getClassName() + ".db";
		} else {
			fileName = className + ".db";
		}

		let dataLocation = path.resolve(this.dbPath);

		let dataFile = path.join(dataLocation, fileName);
		return dataFile;
	}
}
