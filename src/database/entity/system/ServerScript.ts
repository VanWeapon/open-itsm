import { Column, Entity } from "typeorm";
import { Record } from "./Record";

@Entity("server_script", { schema: "system" })
export class ServerScript extends Record {
	@Column("text")
	name: string;

	@Column("text")
	script: string;

	@Column("text")
	when: "before" | "after";

	@Column("text")
	on: "load" | "insert" | "update" | "delete";

	@Column("text")
	table: string;

	@Column("int")
	order: number;
}
