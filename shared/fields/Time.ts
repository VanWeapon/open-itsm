import { DateTimeField } from "./DateTime";

export class TimeField extends DateTimeField {
	public readonly name: string = "datetime";
	public readonly label: string = "Date/Time";
	public readonly length: number = 16;

	public value: number;
	constructor(value: number) {
		super(value);
	}

	public getDisplayValue(): string {
		const dateObj = new Date(this.value);
		return dateObj.toTimeString();
	}

	public getDisplayValueLocale(): string {
		const dateObj = new Date(this.value);
		return dateObj.toLocaleTimeString();
	}
}
