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
	@PrimaryGeneratedColumn("uuid")
	guid: string;

	@CreateDateColumn()
	created: Date;

	@UpdateDateColumn()
	updated: Date;

	@Column("varchar", { length: 40 })
	created_by: string;

	@Column("varchar", { length: 40 })
	updated_by: string;

	@Column("varchar", { length: 80 })
	class_name: string;

	@Column("int", { default: 0 })
	update_count: number;

	@Column("boolean", { default: true })
	active: boolean;

	abstract setClassName(): void;

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
