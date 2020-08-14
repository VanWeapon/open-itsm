import { Table } from "./Table";
import { Autonumber } from "./Autonumber";

export class Task extends Table {
	protected number: string;
	constructor() {
		super();
		this.class = "task";
		this.number = Autonumber.getNextNumber("task");
	}
}
