import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Group } from "../system/Group";
import { Record } from "../system/Record";
import { User } from "../system/User";

@Entity("task", { schema: "core" })
export class Task extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "task";
	}

	@Column("varchar", {
		length: 255,
		nullable: false,
		default: "",
	})
	summary: string;

	@Column("text", {
		nullable: false,
		default: "",
	})
	details: string;

	@ManyToOne(() => User)
	assignee: User;

	@ManyToOne(() => Group)
	assignment_group: Group;

	@ManyToOne(() => User)
	authorised_contact: User;

	@ManyToOne(() => Task, { nullable: true })
	parent_task: Task;
}
