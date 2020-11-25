import { Entity, ManyToOne } from "typeorm";
import { AccessControl } from "../AccessControl";
import { Record } from "../Record";
import { Role } from "../Role";

@Entity("acl_requires_role", { schema: "system" })
export class ACLRequiresRole extends Record {
	@ManyToOne(() => AccessControl)
	acl: AccessControl;

	@ManyToOne(() => Role)
	role: Role;
}
