import { Entity, ManyToOne } from "typeorm";
import { Group } from "../Group";
import { Record } from "../Record";
import { Role } from "../Role";

@Entity("group_contains_role", { schema: "system" })
export class GroupContainsRole extends Record {
	@ManyToOne(() => Group)
	group: Group;

	@ManyToOne(() => Role)
	role: Role;
}
