import { StringField } from "./String";

export class AutoNumberField extends StringField {
	private className: string;
	private prefix: string;
	private digits: number;
	public readonly name: string = "autonumber";
	public readonly label: string = "Auto Number";
	public readonly length: 40;

	public value: string;
	constructor(prefix, digits, className) {
		super("");
		this.prefix = prefix;
		this.digits = digits;
		this.className = className;
		this.setValue(this.getNextNumber());
	}

	private getNextNumber(): string {
		let prefix = this.prefix;
		let digits = this.digits;

		//All this does is provide a completely random number, need to implement proper autonumbering system
		let numStr = "";
		var newNum = Math.floor(Math.random() * 10 * digits * 1000);
		for (var i = 0; i < digits; i++) numStr += "0";
		numStr = (numStr + newNum).slice(-digits);
		numStr = prefix + numStr;
		return numStr;
	}
}
