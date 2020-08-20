import { AppEvent } from "./AppEvent";
import { v4 } from "uuid";
import * as path from "path";
import { StringField } from "../fields/String";
import { DateField } from "../fields/Date";
import { GUIDField } from "../fields/GUID";
import { FileReferenceField } from "../fields/FileReference";
import { Field } from "../fields/SystemField";
/**
 * @name SystemFile
 * @description the base class for all record type definitions
 * @property {class}: Must be defined on every new class that extends SystemFile
 */
export abstract class SystemFile extends Object {
	protected class: StringField;
	protected created: DateField;
	protected updated: DateField;
	protected created_by: GUIDField;
	protected updated_by: GUIDField;
	protected guid: GUIDField;
	protected changeHandlers: Function[] = [];

	constructor() {
		super();
		Object.setPrototypeOf(this, new.target.prototype);
		let init = this.getEvent();
		this.class = new StringField("s_file");
		this.created = new DateField(init.time);
		this.updated = new DateField(init.time);
		// this.created_by = new FileReferenceField(init.user, "s_user");
		// this.updated_by = new FileReferenceField(init.user, "s_user");
		this.created_by = new GUIDField(this.generateGUID());
		this.updated_by = new GUIDField(this.generateGUID());
		this.guid = new GUIDField(this.generateGUID());
	}

	private handlePropertyChange(fieldName, oldValue, newValue) {
		console.log("handlePropertyChange: ", fieldName, oldValue, newValue);
		if (this.changeHandlers.length > 0) {
			this.changeHandlers.forEach((handler) => {
				handler.call(this, fieldName, oldValue, newValue);
			});
		}
	}

	public getValue(propertyName: string): string {
		if (!this.hasOwnProperty(propertyName)) {
			return "";
		} else {
			return this[propertyName].toString();
		}
	}

	public setValue(propertyName: string, value: any, display?: any) {
		console.log("setValue: ", propertyName, value, display);
		if (!this.hasOwnProperty(propertyName)) {
			throw `${this.class} does not have the field ${propertyName}`;
		} else {
			try {
				const oldValue = this[propertyName] as Field;
				this.handlePropertyChange(propertyName, oldValue.value, value);
				this[propertyName].value = value;
				if (display) this[propertyName].display = display;
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
