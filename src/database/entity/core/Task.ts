import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { ConfigurationItem } from "../cmdb/ConfigurationItem";
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

	@ManyToOne(() => Task, { nullable: true })
	parent_task: Task;

	@ManyToOne(() => ConfigurationItem, { nullable: true })
	config_item: ConfigurationItem;
}
