import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { GroupContainsRole } from "./m2m/GroupContainsRole";
import { GroupMembership } from "./m2m/GroupMembership";
import { Record } from "./Record";
import { User } from "./User";

@Entity("group", { schema: "system" })
export class Group extends Record {
	@Column("text")
	name: string;

	@Column("text", { nullable: true })
	description: string;

	@ManyToOne(() => User)
	manager: User;

	@OneToMany(() => GroupContainsRole, (m2m) => m2m.group, { nullable: true })
	contains_roles: GroupContainsRole[];

	@OneToMany(() => GroupMembership, (m2m) => m2m.group, { nullable: true })
	group_members: GroupMembership[];
}
