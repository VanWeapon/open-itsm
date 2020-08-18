export interface INumber {
	prefix: string;
	digits: number;
	number: string;
}

export class Autonumber {
	private table_class: string;
	private prefix: string;
	private digits: number;

	constructor() {}

	public static getNextNumber(numberClass: INumber): string {
		let prefix = numberClass.prefix;
		let digits = numberClass.digits;

		//All this does is provide a completely random number, need to implement proper autonumbering system
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
