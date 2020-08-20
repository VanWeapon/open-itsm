// export type GUIDField = {
// 	value: string;
// };

import { StringField } from "./String";
import { v4 } from "uuid";

/**
 * @name GUIDField - a field type for storing a GUID value
 * @property {string} name - the internal field name for this type
 * @property {string} display - the display name for this field type, for use in UIs
 */
export class GUIDField extends StringField {
	public readonly name: string = "guid";
	public readonly label: string = "GUID";
	public readonly length: number = 36;

	public readonly value: string = "";
	constructor(value?: string) {
		super();
		if (value) this.trySetValue(value);
		else this.trySetValue(GUIDField.generateGUID());
	}

	protected trySetValue(value: string) {
		if (this.validateValue(value)) this.setValue(value);
		else this.throwInvalidValueType("v4 guid", typeof value);
	}

	public validateValue(value: string): boolean {
		//04443ab1-2859-418f-ac10-cecc28ba0711
		const V4Regex = new RegExp(
			/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
		);
		return V4Regex.test(value);
	}

	public static generateGUID(): string {
		return v4();
	}
}
