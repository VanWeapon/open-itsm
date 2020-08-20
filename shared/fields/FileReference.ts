import { GUIDField } from "./GUID";
import { SystemFile } from "../schemas/SystemFile";
import { DB } from "../../database/engine/DB";

/**
 * @name FileReferenceField - a field type for storing a link to another File, using GUID as the primary link
 * @extends GUIDField
 * @property {string} name - internal name for the field type
 * @property {string} label - public display name for the field type
 * @property {string} referenceClass - the internal class name of the type of linked field, e.g. "incident"
 * @property {string} value - a GUID string matching a v4 UUID
 * @method validateValue(string) - will validate a given string matches a real record before setting the field's value
 *
 */
export class FileReferenceField extends GUIDField {
	public readonly name: string = "file_reference";
	public readonly label: string = "File Reference";

	public readonly referenceClass: string;

	public readonly value: string = "";
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
