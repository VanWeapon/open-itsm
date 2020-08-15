import { SystemFile } from "./systemfile";

export class Role extends SystemFile {
	private name: string;
	private parent: Role;
	private contains: Role[];

	constructor() {
		super();
		this.class = "s_role";
	}
}
