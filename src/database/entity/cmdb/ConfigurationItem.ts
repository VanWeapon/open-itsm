import { Column, Entity, ManyToOne, TableInheritance } from "typeorm";
import { Company } from "../core/Company";
import { Group } from "../system/Group";
import { Record } from "../system/Record";
import { User } from "../system/User";

@Entity("ci", { schema: "cmdb" })
@TableInheritance({ column: { name: "class_name", type: "text" } })
export class ConfigurationItem extends Record {
	@Column("text")
	name: string;

	@Column("text", { default: "" })
	comments: string;

	@Column("text", { default: "production" })
	environment: "production" | "test" | "staging" | "development";

	@ManyToOne(() => Company, { nullable: true })
	company: Company;

	@ManyToOne(() => Group, { nullable: true })
	support_group: Group;

	@ManyToOne(() => User, { nullable: true })
	primary_owner: User;
}
