import { SystemFile } from "./SystemFile";
import { AppEvent } from "./AppEvent";

export class Table extends SystemFile {
	constructor() {
		super();
		this.class = "s_dbo";
	}

	public getValue(field: string) {
		return this[field].toString();
	}

	getTableObject(tableName: string) {}
}
