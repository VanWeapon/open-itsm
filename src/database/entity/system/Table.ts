import { Entity, Column, getConnection } from "typeorm";
import { Record } from "./Record";
import { Dictionary } from "./Dictionary";

@Entity("dbo", { schema: "system" })
export class Table extends Record {
	@Column("text", { unique: true })
	name: string;

	@Column("text")
	label: string;

	@Column("text", { nullable: true })
	extends: string;

	@Column("text", { nullable: true })
	extends_root: string;

	@Column("boolean", { default: false })
	autonumber: boolean;

	@Column("text", { nullable: true })
	number_prefix: string;

	@Column("integer", { nullable: true })
	number_digits: number;

	@Column("text", { default: "system" })
	table_scope: string;

	// called via subscriber
	async createDefaultDictionaries() {
		const c = getConnection(process.env.NODE_ENV);
		const repo = c.getRepository(Dictionary);

		const guid = repo.create();
		guid.active = true;
		guid.column_name = "guid";
		guid.column_label = "GUID";
		guid.max_length = 36;
		guid.table = this.name;
		guid.type = "uuid";
		guid.created_by = this.created_by;
		guid.updated_by = this.updated_by;

		const created_by = repo.create();
		created_by.active = true;
		created_by.column_name = "created_by";
		created_by.column_label = "Created By";
		created_by.read_only = true;
		created_by.max_length = 80;
		created_by.type = "text";
		created_by.table = this.name;
		created_by.created_by = this.created_by;
		created_by.updated_by = this.updated_by;

		const updated_by = repo.create();
		updated_by.active = true;
		updated_by.column_name = "updated_by";
		updated_by.column_label = "Updated By";
		updated_by.max_length = 80;
		updated_by.type = "text";
		updated_by.table = this.name;
		updated_by.created_by = this.created_by;
		updated_by.updated_by = this.updated_by;

		const created = repo.create();
		created.active = true;
		created.column_name = "created";
		created.column_label = "Created";
		created.read_only = true;
		created.max_length = 80;
		created.type = "timestamp";
		created.table = this.name;
		created.created_by = this.created_by;
		created.updated_by = this.updated_by;

		const updated = repo.create();
		updated.active = true;
		updated.column_name = "updated";
		updated.column_label = "Updated";
		updated.max_length = 80;
		updated.type = "timestamp";
		updated.table = this.name;
		updated.created_by = this.created_by;
		updated.updated_by = this.updated_by;

		const class_name = repo.create();
		class_name.active = true;
		class_name.column_name = "class_name";
		class_name.column_label = "Class Name";
		class_name.max_length = 80;
		class_name.type = "text";
		class_name.table = this.name;
		class_name.created_by = this.created_by;
		class_name.updated_by = this.updated_by;

		const update_count = repo.create();
		update_count.active = true;
		update_count.column_name = "update_count";
		update_count.column_label = "Update count";
		update_count.max_length = 32;
		update_count.type = "int";
		update_count.table = this.name;
		update_count.created_by = this.created_by;
		update_count.updated_by = this.updated_by;

		const scope = repo.create();
		scope.active = true;
		scope.column_name = "scope";
		scope.column_label = "Scope";
		scope.max_length = 400;
		scope.type = "text";
		scope.table = this.name;
		scope.created_by = this.created_by;
		scope.updated_by = this.updated_by;

		const entries = [
			guid,
			created_by,
			updated_by,
			created,
			updated,
			class_name,
			update_count,
			scope,
		];

		await repo.save(entries);
	}
}
