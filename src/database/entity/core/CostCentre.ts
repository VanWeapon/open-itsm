import { Column, Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { User } from "../system/User";
import { Department } from "./Department";

@Entity("cost_centre", { schema: "core" })
export class CostCentre extends Record {
	@Column("text")
	name: string;

	@Column("text", { default: "" })
	description: string;

	@Column("text")
	code: string;

	@ManyToOne(() => User, { nullable: true })
	centre_head: User;

	@ManyToOne(() => Department, { nullable: true })
	department: Department;
}
