import { DateTimeField } from "./DateTime";

export class DateField extends DateTimeField {
	public readonly name: string = "date";
	public readonly label: string = "Date";
	public readonly length: number = 16;

	public value: number;
	constructor(value: number) {
		super(value);
	}

	public getDisplayValue(): string {
		const dateObj = new Date(this.value);
		return dateObj.toDateString();
	}

	public getDisplayValueLocale(): string {
		const dateObj = new Date(this.value);
		return dateObj.toLocaleDateString();
	}
}
