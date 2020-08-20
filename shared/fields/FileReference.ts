import { GUIDField } from "./GUID";
import { SystemFile } from "../schemas/SystemFile";
import { DB } from "../../database/engine/DB";

// export type FileReferenceField = {
// 	value: string;
// 	display: string;
// 	class: string;
// };

export class FileReferenceField extends GUIDField {
	public name: string = "file_reference";
	public label: string = "File Reference";

	public referenceClass: string;
	constructor(value: string, referenceClass: string) {
		super(value);
		this.referenceClass = referenceClass;
		if (this.validateValue(value)) this.setValue(value);
		else
			this.throwInvalidValueType(
				"GUID of a valid record on table " + referenceClass,
				typeof value
			);
	}

	public validateValue(value: string): boolean {
		let validated = false;

		const db = new DB();
		db.initialise(this.referenceClass);
		db.loadRecord("guid", value)
			.then((value) => {
				if (value) validated = true;
			})
			.catch((error) => {
				console.log(error);
				validated = false;
			});

		return validated;
	}
}
