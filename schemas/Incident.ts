import { Task } from "./Task";
import { Autonumber } from "./Autonumber";

export class Incident extends Task {
	public readonly number: string;
	public readonly prefix: string = "INC";
	public readonly digits: number = 7;

	constructor() {
		super();
		this.class = "incident";
		this.number = Autonumber.getNextNumber("incident");
	}
}
