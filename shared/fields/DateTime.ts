import { NumberField } from "./Number";

export class DateTimeField extends NumberField {
	public readonly name: string = "datetime";
	public readonly label: string = "Date/Time";
	public readonly length: number = 16;
	public readonly value: number;

	constructor(value: number) {
		super(value);
		this.trySetValue(value);
	}

	public updateValue(value: number) {
		this.trySetValue(value);
	}
	public validateValue(value: number) {
		var temp = new Date(value);
		var dateEpoch = temp.getTime();
		if (dateEpoch === value) return true;
		else return false;
	}

	protected trySetValue(value: number) {
		if (this.validateValue(value)) {
			this.setValue(value);
		} else {
			this.throwInvalidValueType(
				"Epoch time since Jan 1 1970",
				`${typeof value} (${value})`
			);
		}
	}
	public getDisplayValue(): string {
		const dateObj = new Date(this.value);
		return dateObj.toString();
	}

	public getDisplayValueISO(): string {
		const dateObj = new Date(this.value);
		return dateObj.toISOString();
	}

	public getDisplayValueUTC(): string {
		const dateObj = new Date(this.value);
		return dateObj.toUTCString();
	}

	public getDisplayValueLocale(): string {
		const dateObj = new Date(this.value);
		return dateObj.toLocaleString();
	}
}
