import { Table } from "./Table";
import { AutoNumberField } from "../fields/AutoNumber";
import { StringField } from "../fields/String";

export class Task extends Table {
	public readonly digits: number = 7;
	public readonly prefix: string = "TASK";
	public readonly number: AutoNumberField;
	public short_description: StringField = new StringField("");
	public description: StringField = new StringField("");
	public assignee: StringField = new StringField("");
	public caller: StringField = new StringField("");
	public location: StringField = new StringField("");

	constructor() {
		super();
		this.class.updateValue("task");
		this.number = new AutoNumberField(
			this.prefix,
			this.digits,
			this.class.name
		);
	}
}
