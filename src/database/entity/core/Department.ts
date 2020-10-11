import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { User } from "../system/User";
import { CostCentre } from "./CostCentre";

@Entity("department", { schema: "core" })
export class Department extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "department";
	}

	@Column("varchar", { length: 255 })
	name: string;

	@Column("text")
	description: string;

	@ManyToOne(() => User)
	department_head: User;

	@ManyToOne(() => CostCentre, { nullable: true })
	cost_centre: CostCentre;
}
