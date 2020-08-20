// export type StringField = {
// 	value: string;
// };

import { Field } from "./SystemField";

export class StringField extends Field {
	public readonly name: string = "string";
	public readonly label: string = "String";
	public readonly length: number = Number.MAX_SAFE_INTEGER;
	public readonly value: string = "";

	constructor(value?: string) {
		super();
		if (value) this.trySetValue(value);
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
