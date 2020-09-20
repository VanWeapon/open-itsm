import { Record } from "./Record";
import {
	BeforeInsert,
	Entity,
	Column,
	ColumnType,
	ManyToOne,
	AfterInsert,
} from "typeorm";
import { Table } from "./Table";
import { FieldClass } from "./FieldClass";
import { FieldLabel } from "./FieldLabel";

@Entity("s_dictionary")
export class Dictionary extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "s_dictionary";
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

	@ManyToOne(() => FieldClass, {
		nullable: false,
		eager: true,
	})
	internal_type: ColumnType;

	@ManyToOne(() => Table, {
		eager: true,
		nullable: false,
	})
	table_name: Table;

	@ManyToOne(() => Table, {
		eager: true,
		nullable: true,
	})
	reference_table: string;

	@Column("integer")
	max_length: number;

	@Column("text")
	default_value: string;

	@AfterInsert()
	createDefaultLabel() {
		const label = new FieldLabel();
		label.element = this;
		label.label = this.column_label;
		label.table = this.table_name;
		label.save();
	}
}
