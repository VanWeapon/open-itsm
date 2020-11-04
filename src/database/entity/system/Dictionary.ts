import { Record } from "./Record";
import { Entity, Column, getConnection, ColumnType } from "typeorm";
import { FieldLabel } from "./FieldLabel";

@Entity("dictionary", { schema: "system" })
export class Dictionary extends Record {
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

	@Column("text")
	column_name: string;

	@Column("text")
	column_label: string;

	@Column("text")
	table: string;

	@Column("text")
	type: ColumnType;

	@Column("text", { nullable: true })
	reference_table: string;

	@Column("integer", { default: 255 })
	max_length: number;

	@Column("text", { nullable: true })
	default_value: string;

	// called via subscriber
	async createDefaultLabel() {
		const c = getConnection(process.env.NODE_ENV);
		const repo = c.getRepository(FieldLabel);
		const label = repo.create();
		label.element = this;
		label.label = this.column_label;
		label.table = this.table;
		label.created_by = this.created_by;
		label.updated_by = this.updated_by;

		await repo.save(label);
	}
}
