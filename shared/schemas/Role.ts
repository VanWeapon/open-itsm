import { SystemFile } from "./SystemFile";
import { StringField } from "../fields/String";

export class Role extends SystemFile {
	private name: StringField;
	private parent: Role;
	private contains: Role[];

	constructor() {
		super();
		this.class.updateValue("s_role");
	}
}
