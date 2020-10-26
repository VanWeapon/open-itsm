import { BeforeInsert, Entity, ManyToOne } from "typeorm";
import { Task } from "../core/Task";
import { Incident } from "./Incident";

@Entity("incident_task", { schema: "itsm" })
export class IncidentTask extends Task {
	@BeforeInsert()
	setClassName() {
		this.class_name = "incident_task";
	}

	@ManyToOne(() => Incident)
	parent_incident: Incident;
}
