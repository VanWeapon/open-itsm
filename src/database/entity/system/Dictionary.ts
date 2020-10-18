import { Record } from "./Record";
import { BeforeInsert, Entity, Column, ManyToOne, AfterInsert } from "typeorm";
import { Table } from "./Table";
import { FieldLabel } from "./FieldLabel";

@Entity("dictionary", { schema: "system" })
export class Dictionary extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "dictionary";
	}

	@Column("boolean", { default: false })
	active: boolean;

	@Column("boolean", { default: false })
	primary: boolean;

	@Column("boolean", { default: false })
	read_only: boolean;

	@Column("boolean", { default: false })
	mandatory: boolean;

	@Column("boolean", { default: false })
	display: boolean;

	@Column("varchar", { length: 80 })
	column_name: string;

	@Column("varchar", { length: 80 })
	column_label: string;

	@ManyToOne(() => Table, {
		eager: true,
		nullable: false,
	})
	table: Table;

	@ManyToOne(() => Table, {
		eager: true,
		nullable: true,
	})
	reference_table: Table;

	@Column("integer", { default: 255 })
	max_length: number;

	@Column("text", { nullable: true })
	default_value: string;

	@AfterInsert()
	createDefaultLabel() {
		const label = new FieldLabel();
		label.element = this;
		label.label = this.column_label;
		label.table = this.table;
		label.created_by = this.created_by;
		label.updated_by = this.updated_by;
		label.save();
	}
}
