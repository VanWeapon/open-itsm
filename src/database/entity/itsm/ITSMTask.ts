import { Entity, ManyToOne, TableInheritance } from "typeorm";
import { ConfigurationItem } from "../cmdb/ConfigurationItem";
import { Task } from "../core/Task";

@Entity("itsm_task", { schema: "itsm" })
@TableInheritance({ column: { name: "class_name", type: "text" } })
export abstract class ITSMTask extends Task {
	@ManyToOne(() => ITSMTask, { nullable: true })
	parent_task: ITSMTask;

	@ManyToOne(() => ConfigurationItem, { nullable: true })
	config_item: ConfigurationItem;
}
