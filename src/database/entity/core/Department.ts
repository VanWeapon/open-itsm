import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { User } from "../system/User";
import { Company } from "./Company";

@Entity("department", { schema: "core" })
export class Department extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "department";
	}

	@Column("varchar", { length: 255 })
	name: string;

	@Column("text", { default: "" })
	description: string;

	@ManyToOne(() => User, { nullable: true })
	department_head: User;

	@ManyToOne(() => Company, { nullable: true })
	company: Company;
}
