import { ChildEntity, ManyToOne } from "typeorm";
import { Change } from "./Change";
import { ITSMTask } from "./ITSMTask";

@ChildEntity("change_task")
export class ChangeTask extends ITSMTask {
	@ManyToOne(() => Change)
	parent_change: Change;
}
