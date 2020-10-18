import { Record } from "./Record";
import {
	BeforeInsert,
	Entity,
	Column,
	ManyToMany,
	OneToMany,
	JoinTable,
} from "typeorm";
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
	@JoinTable({ name: "acl_requires_role", schema: "system" })
	acl_requires_role: AccessControl[];
}
