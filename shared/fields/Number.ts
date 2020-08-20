// export type NumberField = {
// 	value: number;
// };

import { Field } from "./SystemField";

export class NumberField extends Field {
	public readonly name: string = "number";
	public readonly label: string = "Number";
	public readonly length: number = Number.MAX_SAFE_INTEGER;

	public readonly value: number = 0;
	constructor(value: number) {
		super();
		if (this.validateValue(value)) this.setValue(value);
		else this.throwInvalidValueType("number", typeof value);
	}

	public validateValue(value: any) {
		if (typeof value !== "number") {
			return false;
		} else {
			return true;
		}
	}

	public getValue(): number {
		return +super.getValue();
	}
}
