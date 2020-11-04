import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Record } from "./Record";
import { Dictionary } from "./Dictionary";
import { Role } from "./Role";

@Entity("acl", { schema: "system" })
export class AccessControl extends Record {
	@Column("boolean", { default: true }) active: boolean;

	@Column("text")
	table: string;

	@ManyToOne(() => Dictionary, {
		nullable: true,
		eager: true,
	})
	field: Dictionary;

	@ManyToMany(() => Role, (roles) => roles.acl_requires_role, {
		nullable: false,
	})
	@JoinTable({ name: "acl_requires_role", schema: "system" })
	requires_role: Role[];

	@Column("text")
	type: "record" | "field";

	@Column("text")
	operation: "create" | "read" | "update" | "delete";
}
