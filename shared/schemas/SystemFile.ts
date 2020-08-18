import { AppEvent } from "./AppEvent";
import { v4 } from "uuid";
import * as path from "path";
/**
 * @name SystemFile
 * @description the base class for all record type definitions
 * @property {class}: Must be defined on every new class that extends SystemFile
 */
export abstract class SystemFile extends Object {
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

	public setValue(propertyName: string, value: any) {
		if (!this.hasOwnProperty(propertyName)) {
			throw `${this.class} does not have the field ${propertyName}`;
		} else {
			try {
				this[propertyName] = value;
				return true;
			} catch {
				throw `${
					this.class
				} ${propertyName} is not assignable to the type ${typeof value}`;
			}
		}
	}

	public generateGUID(): string {
		return v4();
	}

	/**
	 * This should be related to the API event which triggered the initialisation of a new record
	 */
	private getEvent(): AppEvent {
		return {
			user: "12345",
			time: Date.now(),
		};
	}

	private getFileName() {
		let fileName = this.class + ".db";
		let dataLocation = path.resolve("./database/data/");
		let dataFile = path.join(dataLocation, fileName);

		return dataFile;
	}

	public getClassName() {
		return this.class;
	}
}
