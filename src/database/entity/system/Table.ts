import { Entity, Column, BeforeInsert, getConnection } from "typeorm";
import { Record } from "./Record";
import { Dictionary } from "./Dictionary";

@Entity("dbo", { schema: "system" })
export class Table extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "dbo";
	}

	@Column("varchar", { length: 80, unique: true })
	name: string;
	@Column("varchar", { length: 80 })
	label: string;
	@Column("varchar", { length: 80, nullable: true })
	extends: string;

	@Column("boolean", { default: false })
	autonumber: boolean;
	@Column("text", { nullable: true })
	number_prefix: string;
	@Column("integer", { nullable: true })
	number_digits: number;

	// called via subscriber
	async createDefaultDictionaries() {
		const c = getConnection(process.env.NODE_ENV);
		const repo = c.getRepository(Dictionary);

		const guid = repo.create();
		guid.active = true;
		guid.column_name = "guid";
		guid.column_label = "GUID";
		guid.max_length = 36;
		guid.table = this;
		guid.created_by = this.created_by;
		guid.updated_by = this.updated_by;

		const created_by = repo.create();
		created_by.active = true;
		created_by.column_name = "created_by";
		created_by.column_label = "Created By";
		created_by.read_only = true;
		created_by.max_length = 80;
		created_by.table = this;
		created_by.created_by = this.created_by;
		created_by.updated_by = this.updated_by;

		const updated_by = repo.create();
		updated_by.active = true;
		updated_by.column_name = "updated_by";
		updated_by.column_label = "Updated By";
		updated_by.max_length = 80;
		updated_by.table = this;
		updated_by.created_by = this.created_by;
		updated_by.updated_by = this.updated_by;

		const created = repo.create();
		created.active = true;
		created.column_name = "created";
		created.column_label = "Created";
		created.read_only = true;
		created.max_length = 80;
		created.table = this;
		created.created_by = this.created_by;
		created.updated_by = this.updated_by;

		const updated = repo.create();
		updated.active = true;
		updated.column_name = "updated";
		updated.column_label = "Updated";
		updated.max_length = 80;
		updated.table = this;
		updated.created_by = this.created_by;
		updated.updated_by = this.updated_by;

		const class_name = repo.create();
		class_name.active = true;
		class_name.column_name = "class_name";
		class_name.column_label = "Class Name";
		class_name.max_length = 80;
		class_name.table = this;
		class_name.created_by = this.created_by;
		class_name.updated_by = this.updated_by;

		const updated_count = repo.create();
		updated_count.active = true;
		updated_count.column_name = "updated_count";
		updated_count.column_label = "Update count";
		updated_count.max_length = 32;
		updated_count.table = this;
		updated_count.created_by = this.created_by;
		updated_count.updated_by = this.updated_by;

		const entries = [
			guid,
			created_by,
			updated_by,
			created,
			updated,
			class_name,
			updated_count,
		];

		await repo.save(entries);
	}
}
