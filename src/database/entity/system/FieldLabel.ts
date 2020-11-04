import { Entity, Column, ManyToOne } from "typeorm";
import { Record } from "./Record";
import { Dictionary } from "./Dictionary";

@Entity("field_label", { schema: "system" })
export class FieldLabel extends Record {
	@Column("text", { nullable: true })
	label: string;

	@ManyToOne(() => Dictionary, {
		nullable: false,
	})
	element: Dictionary;

	@Column("text")
	table: string;
}
