import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Company } from "../core/Company";
import { Group } from "../system/Group";
import { Record } from "../system/Record";
import { User } from "../system/User";

@Entity("ci", { schema: "cmdb" })
export class ConfigurationItem extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "ci";
	}

	@Column("varchar", { length: 255 })
	name: string;

	@Column("text", { default: "" })
	comments: string;

	@Column("varchar")
	environment: "production" | "test" | "staging" | "development";

	@ManyToOne(() => Company, { nullable: true })
	company: Company;

	@ManyToOne(() => Group, { nullable: true })
	support_group: Group;

	@ManyToOne(() => User, { nullable: true })
	primary_owner: User;
}
