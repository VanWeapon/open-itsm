import { timeStamp } from "console";

export abstract class Field extends Object {
	[index: string]: any;
	public abstract name: string;
	public abstract label: string;
	public abstract length: number;

	public abstract value: any;
	constructor() {
		super();
		Object.setPrototypeOf(this, new.target.prototype);
	}

	protected setValue(value: any) {
		this.value = value;
	}

	protected calculateValue() {
		if (this.calculated && this.calulationScript) {
			this.calulationScript.call(this);
		}
	}

	protected trySetValue(value: any) {
		if (this.validateValue(value)) this.setValue(value);
	}

	public getValue(): any {
		return this.value;
	}

	public updateValue(value: any) {
		this.trySetValue(value);
	}

	public getDisplayValue(): any {
		return this.value;
	}

	private validateLength(value: string | number | boolean) {
		value = value.toString();
		if (this.length == Number.MAX_SAFE_INTEGER || this.length == 0) {
			return true;
		} else if (value.length < this.length) {
			return true;
		} else {
			this.throwInvalidLength(
				this.length,
				value.length || value.toString().length
			);
		}
	}

	public validateValue(value: string | number | boolean): boolean {
		if (this.validateLength(value)) return true;
		else return false;
	}

	protected throwInvalidValueType(expected: string, actual: string) {
		throw new Error(
			`Invalid type passed, ${this.label} expects ${expected}, but received ${actual}`
		);
	}

	protected thowInvalidSuperCall(expected: string, actual: string) {
		throw new Error(
			`Invalid base type passed, ${this.label} expects ${expected}, but received ${actual}`
		);
	}

	private throwInvalidLength(expected: number, actual: number) {
		throw new Error(
			`Invalid value length, maximum length is ${expected}, provided value length is ${actual}`
		);
	}
}
