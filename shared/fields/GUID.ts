// export type GUIDField = {
// 	value: string;
// };

import { StringField } from "./String";

export class GUIDField extends StringField {
	public readonly name: string = "guid";
	public readonly label: string = "GUID";
	public readonly length: number = 36;

	constructor(value: string) {
		super(value);
		this.trySetValue(value);
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
}
