import { Column, Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { User } from "../system/User";
import { Company } from "./Company";

@Entity("department", { schema: "core" })
export class Department extends Record {
	@Column("text")
	name: string;

	@Column("text", { default: "" })
	description: string;

	@ManyToOne(() => User, { nullable: true })
	department_head: User;

	@ManyToOne(() => Company, { nullable: true })
	company: Company;
}
