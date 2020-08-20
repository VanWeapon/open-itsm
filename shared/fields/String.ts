// export type StringField = {
// 	value: string;
// };

import { Field } from "./SystemField";

export class StringField extends Field {
	public name: string = "string";
	public label: string = "String";
	public length: number = Number.MAX_SAFE_INTEGER;

	constructor(value: string) {
		super();
		this.trySetValue(value);
	}

	public validateValue(value: any) {
		if (typeof value !== "string") {
			return false;
		} else {
			return true;
		}
	}

	public getValue(): string {
		return super.getValue().toString();
	}

	protected trySetValue(value: string) {
		if (this.validateValue(value)) {
			this.setValue(value);
		} else {
			this.throwInvalidValueType("string", typeof value);
		}
	}
}
