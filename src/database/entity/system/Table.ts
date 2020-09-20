import { Entity, Column, BeforeInsert, OneToMany, AfterInsert } from "typeorm";
import { Record } from "./Record";
import { Dictionary } from "./Dictionary";

@Entity("s_dbo")
export class Table extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "s_dbo";
	}

	@Column("varchar", { length: 80, unique: true })
	name: string;
	@Column("varchar", { length: 80 })
	label: string;
	@Column("varchar", { length: 80 })
	extends: string;

	@Column("boolean")
	autonumber: boolean;
	@Column("text")
	number_prefix: string;
	@Column("integer")
	number_digits: number;

	@OneToMany(() => Dictionary, (dictionary) => dictionary.table_name)
	dictionary_entries: Dictionary[];

	@AfterInsert()
	createDefaultDictionaries() {
		const guid = new Dictionary();
		guid.active = true;
		guid.column_name = "guid";
		guid.column_label = "GUID";
		guid.internal_type = "uuid";
		guid.max_length = 36;
		guid.table_name = this;
		guid.created_by = this.created_by;
		guid.updated_by = this.updated_by;
		guid.save();

		const created_by = new Dictionary();
		created_by.active = true;
		created_by.column_name = "created_by";
		created_by.column_label = "Created By";
		created_by.internal_type = "varchar";
		created_by.read_only = true;
		created_by.max_length = 80;
		created_by.table_name = this;
		created_by.created_by = this.created_by;
		created_by.updated_by = this.updated_by;
		created_by.save();

		const updated_by = new Dictionary();
		updated_by.active = true;
		updated_by.column_name = "updated_by";
		updated_by.column_label = "Updated By";
		updated_by.internal_type = "varchar";
		updated_by.max_length = 80;
		updated_by.table_name = this;
		updated_by.created_by = this.created_by;
		updated_by.updated_by = this.updated_by;
		updated_by.save();

		const created = new Dictionary();
		created.active = true;
		created.column_name = "created";
		created.column_label = "Created";
		created.internal_type = "date";
		created.read_only = true;
		created.max_length = 80;
		created.table_name = this;
		created.created_by = this.created_by;
		created.updated_by = this.updated_by;
		created.save();

		const updated = new Dictionary();
		updated.active = true;
		updated.column_name = "updated";
		updated.column_label = "Updated";
		updated.internal_type = "date";
		updated.max_length = 80;
		updated.table_name = this;
		updated.created_by = this.created_by;
		updated.updated_by = this.updated_by;
		updated.save();

		const class_name = new Dictionary();
		class_name.active = true;
		class_name.column_name = "class_name";
		class_name.column_label = "Class Name";
		class_name.internal_type = "varchar";
		class_name.max_length = 80;
		class_name.table_name = this;
		class_name.created_by = this.created_by;
		class_name.updated_by = this.updated_by;
		class_name.save();

		const updated_count = new Dictionary();
		updated_count.active = true;
		updated_count.column_name = "updated_count";
		updated_count.column_label = "Update count";
		updated_count.internal_type = "integer";
		updated_count.max_length = 32;
		updated_count.table_name = this;
		updated_count.created_by = this.created_by;
		updated_count.updated_by = this.updated_by;
		updated_count.save();
	}
}
