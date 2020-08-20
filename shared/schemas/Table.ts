import { SystemFile } from "./SystemFile";
import { DB } from "../../database/engine/DB";
import { StringField } from "../fields/String";
import { Field } from "../fields/SystemField";
export class Table extends SystemFile {
	constructor() {
		super();
		this.class.updateValue("s_dbo");
	}

	public getValue(field: string) {
		try {
			const internalField = this[field] as Field;
			const value = internalField.getValue();
			return value;
		} catch (error) {
			return error;
		}
	}

	public getDisplayValue(field: string) {
		try {
			const internalField = this[field] as Field;
			const value = internalField.getDisplayValue();
			return value;
		} catch (error) {
			return error;
		}
	}

	public getReferencedRecord(field: string) {}

	getTableObject(tableName: string) {}
}
