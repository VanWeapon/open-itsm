import { Table } from "./Table";
import { Autonumber, INumber } from "./Autonumber";

export class Task extends Table implements INumber {
	public readonly digits: number = 7;
	public readonly prefix: string = "TASK";
	public readonly number: string;
	public short_description: string = "";
	public description: string = "";
	public assignee: string = "";
	public caller: string = "";
	public location: string = "";

	constructor() {
		super();
		this.class = "task";
		this.number = Autonumber.getNextNumber(this);
	}
}
