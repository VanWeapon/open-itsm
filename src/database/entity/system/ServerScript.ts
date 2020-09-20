import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Record } from "./Record";
import { Table } from "./Table";

@Entity("s_script_server")
export class ServerScript extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "s_script_server";
	}

	@Column("varchar", { length: 80 })
	name: string;

	@Column("text")
	script: string;

	@Column()
	when: "before" | "after";

	@Column()
	on: "load" | "insert" | "update" | "delete";

	@ManyToOne(() => Table)
	table: Table;
}
