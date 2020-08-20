import { SystemFile } from "./SystemFile";
import { DB } from "../../database/engine/DB";
import { StringField } from "../fields/String";
import { Field } from "../fields/SystemField";
export class Table extends SystemFile {
	constructor() {
		super();
		this.class.value = "s_dbo";
	}

	public getValue(field: string) {
		const internalField = <Field>this[field];
		const value = internalField.getValue();
		return value;
	}

	public getDisplayValue(field: string) {
		if (this[field].display) return this[field].display;
		else return this[field].value;
	}

	public getReferencedRecord(field: string) {}

	getTableObject(tableName: string) {}
}
