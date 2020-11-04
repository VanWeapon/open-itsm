import { Record } from "./Record";
import { Entity, Column, ManyToMany, OneToMany } from "typeorm";
import { AccessControl } from "./AccessControl";

@Entity("role", { schema: "system" })
export class Role extends Record {
	@Column("text")
	name: string;

	@OneToMany(() => Role, (r) => r.includes_roles)
	includes_roles: Role[];

	@ManyToMany(() => AccessControl, (acl) => acl.requires_role)
	acl_requires_role: AccessControl[];
}
