import { Table } from "./Table";
import { Role } from "./Role";
import { StringField } from "../fields/String";

export class User extends Table {
	public readonly first_name: StringField = new StringField("");
	public readonly last_name: StringField = new StringField("");
	public readonly name: StringField = new StringField("");

	public readonly roles: Role[] = [];
	constructor() {
		super();
		this.class.updateValue("s_user");
		this.changeHandlers.push(this.handleNameChange);
	}

	private handleNameChange(fieldName: string, oldValue: any, newValue: any) {
		console.log(
			"running handleNameChange: ",
			fieldName,
			oldValue,
			newValue
		);
		if (fieldName == "first_name") {
			this.setValue("name", newValue + " " + this.last_name.getValue());
			return true;
		} else if (fieldName == "last_name") {
			this.setValue("name", this.first_name.getValue() + " " + newValue);
			return true;
		} else {
			return true;
		}
	}

	/**
	 * Includes resetting calculated values
	 */
	public setValue(fieldName: string, fieldValue: string): boolean {
		super.setValue(fieldName, fieldValue);

		if (fieldName == "first_name" || fieldName == "last_name") {
		}
		return true;
	}
}
