import {
	BeforeInsert,
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
} from "typeorm";
import { Record } from "./Record";
import { Role } from "./Role";
import { User } from "./User";

@Entity("s_group", { schema: "system" })
export class Group extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "s_group";
	}

	@Column("varchar", { length: 255, nullable: false })
	name: string;

	@Column("text", { nullable: true })
	description: string;

	@ManyToOne(() => User)
	manager: User;

	@ManyToMany(() => User)
	@JoinTable({ name: "s_group_membership" })
	group_members: User[];

	@ManyToMany(() => Role)
	@JoinTable({ name: "s_group_contains_role" })
	contains_roles: Role[];
}
