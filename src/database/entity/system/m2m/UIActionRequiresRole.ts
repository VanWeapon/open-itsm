import { Entity, ManyToOne } from "typeorm";
import { Record } from "../Record";
import { Role } from "../Role";
import { UIAction } from "../UIAction";

@Entity("ui_action_requires_role", { schema: "system" })
export class UIActionRequiresRole extends Record {
	@ManyToOne(() => UIAction)
	ui_action: UIAction;

	@ManyToOne(() => Role)
	role: Role;
}
