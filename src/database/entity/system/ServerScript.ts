import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Record } from "./Record";
import { Table } from "./Table";

@Entity("server_script", { schema: "system" })
export class ServerScript extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "server_script";
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
