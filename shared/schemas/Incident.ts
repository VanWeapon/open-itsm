import { Task } from "./Task";
import { StringField } from "../fields/String";
import { AutoNumberField } from "../fields/AutoNumber";

export class Incident extends Task {
	public readonly number: AutoNumberField;
	public readonly prefix: string = "INC";
	public readonly digits: number = 7;
	public readonly impact: 1 | 2 | 3 | 4 | 5 = 4;
	public readonly urgency: 1 | 2 | 3 | 4 | 5 = 4;

	constructor() {
		super();
		this.class.updateValue("incident");
		this.number = new AutoNumberField({
			prefix: this.prefix,
			digits: this.digits,
		});
		this.changeHandlers.push(this.validateImpactAndUrgency);
	}

	private validateImpactAndUrgency(
		fieldName: string,
		oldValue: any,
		newValue: number
	) {
		if (fieldName == "impact" || fieldName == "urgency") {
			if (![1, 2, 3, 4, 5].includes(newValue)) {
			}
		}
	}
}
