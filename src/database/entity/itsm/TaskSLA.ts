import { BeforeInsert, Entity } from "typeorm";
import { Record } from "../system/Record";

@Entity("task_sla", { schema: "itsm" })
export class TaskSLA extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "task_sla";
	}
}
