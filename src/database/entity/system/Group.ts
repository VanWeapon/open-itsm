import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Record } from "./Record";
import { Role } from "./Role";
import { User } from "./User";

@Entity("group", { schema: "system" })
export class Group extends Record {
	@Column("text")
	name: string;

	@Column("text", { nullable: true })
	description: string;

	@ManyToOne(() => User)
	manager: User;

	@ManyToMany(() => User)
	@JoinTable({ name: "group_membership" })
	group_members: User[];

	@ManyToMany(() => Role)
	@JoinTable({ name: "group_contains_role" })
	contains_roles: Role[];
}
