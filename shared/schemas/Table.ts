import { SystemFile } from "./SystemFile";

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
