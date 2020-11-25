import {
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BeforeUpdate,
	BaseEntity,
	BeforeInsert,
} from "typeorm";

/**
 * @property {string} guid
 * @property {Date} created
 * @property {Date} updated
 * @property {string} created_by
 * @property {string} updated_by
 * @property {string} class_name
 * @property {number} update_count
 * @method setClassName BeforeInsert() set class name to a string of the name of the table
 */
export abstract class Record extends BaseEntity {
	[index: string]: any;

	@PrimaryGeneratedColumn("uuid")
	guid: string;

	@CreateDateColumn()
	created: Date;

	@UpdateDateColumn()
	updated: Date;

	@Column("text", { default: "system" })
	created_by: string;

	@Column("text")
	updated_by: string;

	@Column("text")
	class_name: string;

	@Column("text")
	scope: string;

	@Column("int", { default: 0 })
	update_count: number;

	@Column("boolean", { default: true })
	active: boolean;

	@BeforeUpdate()
	incrementUpdateCount() {
		this.update_count++;
	}

	@BeforeInsert()
	setUpdatedBy() {
		if (!this.updated_by) this.updated_by = this.created_by;
	}

	shallowCopy() {
		console.log("Shallow copy called, not implemented");
	}

	copyWithRelations() {
		console.log("Deep copy called, not implemented");
	}
}
