import { SystemFile } from "./SystemFile";
import { StringField } from "../fields/String";

export class Role extends SystemFile {
	private name: StringField = new StringField("");

	constructor() {
		super();
		this.class.updateValue("s_role");
	}
}
