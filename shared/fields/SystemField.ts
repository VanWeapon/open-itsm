export abstract class Field {
	public readonly name: string;
	public readonly label: string;
	public readonly length: number;

	public value: any;
	constructor() {}

	protected setValue(value: any) {
		this.value = value;
	}

	protected trySetValue(value: any) {
		if (this.validateValue(value)) this.setValue(value);
	}

	public validateValue(value): boolean {
		if (this.validateLength(value)) return true;
		else return false;
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

	public getValue(): any {
		return this.value;
	}

	public updateValue(value) {
		this.value = value;
	}

	public getDisplayValue(): any {
		return this.value;
	}
}
