import { AppEvent } from "./AppEvent";
import { v4 } from "uuid";
import * as fs from "fs/promises";
import * as path from "path";
/**
 * @name DBInit
 * @description Mandatory fields for initialising a new SystemFile
 */
export type DBInit = {
	class: string;
	user: string;
	time: number;
};

export abstract class SystemFile extends Object {
	protected name: string;
	protected label: string;
	protected class: string;
	protected created: Date = new Date();
	protected updated: Date;
	protected created_by: string;
	protected updated_by: string;
	protected guid: string;

	constructor() {
		super();
		Object.setPrototypeOf(this, new.target.prototype);
		let init = this.getEvent();
		this.class = "s_file";
		this.created = new Date(init.time);
		this.created_by = init.user;
		this.updated = new Date(init.time);
		this.updated_by = init.user;
		this.guid = this.generateGUID();
	}

	public getValue(propertyName: string): string {
		if (!this.hasOwnProperty(propertyName)) {
			return "";
		} else {
			return this[propertyName].toString();
		}
	}

	public generateGUID(): string {
		return v4();
	}

	private getEvent(): AppEvent {
		return {
			user: "12345",
			time: Date.now(),
		};
	}

	/**
	 * Saves the object to the database
	 */
	public async insert() {
		let fileName = this.class + ".db";
		let dataLocation = path.resolve("./database/data/");
		let dataFile = path.join(dataLocation, fileName);

		await fs
			.appendFile(dataFile, JSON.stringify(this))
			.catch((e) => console.log(e));
	}

	public getClassName() {
		return this.class;
	}
}
