import { Field } from "./SystemField";
import { type } from "os";

export class BooleanField extends Field {
	public readonly name: string = "boolean";
	public readonly label: string = "Boolean";
	public readonly length: number = 5;

	public value: boolean;

	constructor(value: boolean) {
		super();
		this.trySetValue(value);
	}

	public validateValue(value): boolean {
		return typeof value === "boolean";
	}

	public getValue(): boolean {
		return !!super.getValue();
	}

	public updateValue(value: boolean) {
		this.trySetValue(value);
	}

	protected trySetValue(value: boolean) {
		if (this.validateValue(value)) this.setValue(value);
		else this.throwInvalidValueType("boolean", typeof value);
	}

	public getDisplayValue(): string {
		if (this.value === true) return "True";
		else return "False";
	}
}
