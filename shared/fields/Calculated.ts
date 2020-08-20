import { StringField } from "./String";

export class CalculatedField extends StringField {
	public calculationFunction: Function;

	constructor(initialValue: string, calculationFunction: Function) {
		super(initialValue);
		this.calculationFunction = calculationFunction;
	}

	public recalculate(...args: any) {
		this.value = this.calculationFunction(...args);
	}
}
