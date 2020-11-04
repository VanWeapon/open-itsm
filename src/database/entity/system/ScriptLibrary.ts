import { Column, Entity } from "typeorm";
import { Record } from "./Record";

@Entity("script_library", { schema: "system" })
export class ScriptLibrary extends Record {
	@Column("text")
	name: string;

	@Column("text")
	script: string;

	@Column("text", { default: "" })
	description: string;
}
