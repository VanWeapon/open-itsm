import { Entity, ManyToOne } from "typeorm";
import { Group } from "../Group";
import { Record } from "../Record";
import { User } from "../User";

@Entity("group_membership", { schema: "system" })
export class GroupMembership extends Record {
	@ManyToOne(() => Group)
	group: Group;

	@ManyToOne(() => User)
	user: User;
}
