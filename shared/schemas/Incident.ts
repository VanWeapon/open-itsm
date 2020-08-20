import { Task } from "./Task";
import { StringField } from "../fields/String";
import { AutoNumberField } from "../fields/AutoNumber";

export class Incident extends Task {
	public readonly number: AutoNumberField;
	public readonly prefix: string = "INC";
	public readonly digits: number = 7;

	constructor() {
		super();
		this.class.updateValue("incident");
	}
}
