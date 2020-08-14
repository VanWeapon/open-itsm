import { Table } from "./Table";

export class Autonumber extends Table {
	private table_class: string;
	private prefix: string;
	private digits: number;

	constructor() {
		super();
		this.class = "s_number";
	}

	public static getNextNumber(className): string {
		let prefix;
		let digits;
		//replace with DB query
		switch (className) {
			case "task":
				prefix = "TASK";
				digits = 7;
				break;
			case "incident":
				prefix = "INC";
				digits = 7;
				break;
			default:
				prefix = "NUM";
				digits = 10;
				break;
		}

		let numStr = "";
		var newNum = Math.floor(Math.random() * 10 * digits * 1000);
		for (var i = 0; i < digits; i++) numStr += "0";

		numStr = (numStr + newNum).slice(-digits);
		numStr = prefix + numStr;
		return numStr;
	}

	public validateRegex(inputNumber: string) {
		const regexStr = `${this.prefix}[0-9]{${this.digits}}`;
		const re = new RegExp(regexStr);
		return re.test(inputNumber);
	}
}
