import { ChildEntity, Column } from "typeorm";
import { ITSMTask } from "./ITSMTask";

@ChildEntity("change")
export class Change extends ITSMTask {
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
