import { Field } from "./SystemField";

export class ChoiceField extends Field {
	public readonly name: string = "choice";
	public readonly label: string = "Choice";
	public readonly length: number = 255;
	public readonly choices: any[] = [];
	public readonly value: any;

	constructor(choices: any[], defaultValue: any) {
		super();
		this.choices = choices;
		this.value = defaultValue;
	}

	public setValue(value: any) {
		if (this.choices.includes(value)) {
			super.setValue(value);
		} else {
			this.throwInvalidValueType("A valid choice", value);
		}
	}
}
