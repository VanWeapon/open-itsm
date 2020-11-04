import { Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { SLADefinition } from "./SLADefinition";

@Entity("task_sla", { schema: "itsm" })
export class TaskSLA extends Record {
	@ManyToOne(() => SLADefinition)
	sla_definition: SLADefinition;
}
