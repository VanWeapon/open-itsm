import { ChildEntity, ManyToOne } from "typeorm";
import { Incident } from "./Incident";
import { ITSMTask } from "./ITSMTask";

@ChildEntity("incident_task")
export class IncidentTask extends ITSMTask {
	@ManyToOne(() => Incident)
	parent_incident: Incident;
}
