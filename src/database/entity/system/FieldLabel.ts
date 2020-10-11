import { Entity, BeforeInsert, Column, ManyToOne } from "typeorm";
import { Record } from "./Record";
import { Table } from "./Table";
import { Dictionary } from "./Dictionary";

@Entity("s_field_label", { schema: "system" })
export class FieldLabel extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "s_field_label";
	}

	@Column("varchar", { length: 80, nullable: true })
	label: string;

	@ManyToOne(() => Dictionary, {
		nullable: false,
	})
	element: Dictionary;

	@ManyToOne(() => Table)
	table: Table;
}
