import { StringField } from "./String";

export class AutoNumberField extends StringField {
	private prefix: string = "NUM";
	private digits: number = 7;
	public readonly name: string = "autonumber";
	public readonly label: string = "Auto Number";
	public readonly length: number = 40;

	public readonly value: string = "NUM000000";
	constructor({ prefix, digits }: { prefix?: any; digits?: any }) {
		super("");
		this.prefix = prefix;
		this.digits = digits;
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
