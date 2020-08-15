import { Table } from "./Table";
import { Role } from "./Role";

export class User extends Table {
	private first_name: string = "";
	private last_name: string = "";
	private name: string = this.first_name + " " + this.last_name;
	private roles: Role[] = [];
	constructor() {
		super();
		this.class = "s_user";
	}
}
