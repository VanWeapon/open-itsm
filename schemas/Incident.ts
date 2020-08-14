import { Task } from "./Task";
import { AppEvent } from "./AppEvent";
import { Autonumber } from "./Autonumber";

export class Incident extends Task {
	constructor() {
		super();
		this.class = "incident";
		this.number = Autonumber.getNextNumber("incident");
	}
}
