import { Record } from "./Record";
import { BeforeInsert, Entity, Column, ManyToMany, OneToMany } from "typeorm";
import { AccessControl } from "./AccessControl";

@Entity("role", { schema: "system" })
export class Role extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "role";
	}

	@Column("varchar", { length: 255 })
	name: string;

	@OneToMany(() => Role, (r) => r.includes_roles)
	includes_roles: Role[];

	@ManyToMany(() => AccessControl, (acl) => acl.requires_role)
	acl_requires_role: AccessControl[];
}
