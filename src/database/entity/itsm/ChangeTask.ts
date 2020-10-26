import { BeforeInsert, Entity, ManyToOne } from "typeorm";
import { Task } from "../core/Task";
import { Change } from "./Change";

@Entity("change_task", { schema: "itsm" })
export class ChangeTask extends Task {
	@BeforeInsert()
	setClassName() {
		this.class_name = "change_task";
	}

	@ManyToOne(() => Change)
	parent_change: Change;
}
