import { Column, Entity, ManyToOne } from "typeorm";
import { Group } from "../system/Group";
import { Record } from "../system/Record";
import { User } from "../system/User";

@Entity("task", { schema: "core" })
export abstract class Task extends Record {
	@Column("text", {
		default: "",
	})
	summary: string;

	@Column("text", {
		default: "",
	})
	details: string;

	@Column("int", { default: 4 })
	priority: 1 | 2 | 3 | 4 | 5;

	@ManyToOne(() => User, { nullable: true })
	assignee: User;

	@ManyToOne(() => Group, { nullable: true })
	assignment_group: Group;

	@ManyToOne(() => User, { nullable: true })
	authorised_contact: User;
}
