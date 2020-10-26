import { BeforeInsert, Column, Entity } from "typeorm";
import { Task } from "../core/Task";

@Entity("change", { schema: "itsm" })
export class Change extends Task {
	@BeforeInsert()
	setClassName() {
		this.class_name = "change";
	}

	@Column("date", { nullable: true })
	planned_start: Date;

	@Column("date", { nullable: true })
	planned_finish: Date;

	@Column("text", { default: "" })
	justification: string;

	@Column("text", { default: "" })
	implementation_plan: string;

	@Column("text", { default: "" })
	backout_plan: string;

	@Column("text", { default: "" })
	test_plan: string;

	@Column("text", { default: "" })
	risk_analysis: string;
}
