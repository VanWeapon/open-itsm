import { BeforeInsert, Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { SLADefinition } from "./SLADefinition";

@Entity("task_sla", { schema: "itsm" })
export class TaskSLA extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "task_sla";
	}

	@ManyToOne(() => SLADefinition)
	sla_definition: SLADefinition;
}
