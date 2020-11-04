import { BeforeInsert, BeforeUpdate, ChildEntity, Column } from "typeorm";
import { ITSMTask } from "./ITSMTask";

@ChildEntity("incident")
export class Incident extends ITSMTask {
	@Column("int", { default: 4 })
	impact: 1 | 2 | 3 | 4 | 5;

	@Column("int", { default: 4 })
	urgency: 1 | 2 | 3 | 4 | 5;

	@BeforeUpdate()
	@BeforeInsert()
	calculatePriority() {
		const score = this.impact + this.urgency;
		if (score === 2) {
			this.priority = 1; // 1,1
		} else if (score === 3 || score === 4) {
			this.priority = 2; // 1,2, 2,1, 2,2
		} else if (score === 5 || score === 6) {
			this.priority = 3; // 3,2, 2,3 3,3
		} else if (score === 7 || score === 8) {
			this.priority = 4; // 3,4 4,3, 4,4
		} else {
			this.priority = 5; // 4,5 5,4 5,5
		}
	}
}
