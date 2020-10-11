import { Entity, BeforeInsert, Column, ManyToOne, ManyToMany } from "typeorm";
import { Record } from "./Record";
import { Table } from "./Table";
import { Dictionary } from "./Dictionary";
import { Role } from "./Role";

@Entity("s_acl", { schema: "system" })
export class AccessControl extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "s_acl";
	}

	@Column("boolean", { default: true }) active: boolean;

	@ManyToOne(() => Table, { eager: true })
	table: Table;

	@ManyToOne(() => Dictionary, {
		nullable: true,
		eager: true,
	})
	field: Dictionary;

	@ManyToMany(() => Role, (roles) => roles.s_acl_requires_role, {
		nullable: false,
	})
	requires_role: Role[];

	@Column("varchar", { length: 40 })
	type: "record" | "field";

	@Column("varchar", { length: 40 })
	operation: "create" | "read" | "update" | "delete";
}
