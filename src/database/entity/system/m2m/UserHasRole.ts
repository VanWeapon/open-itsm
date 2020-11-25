import { Entity, ManyToOne } from "typeorm";
import { Record } from "../Record";
import { Role } from "../Role";
import { User } from "../User";

@Entity("user_has_role", { schema: "system" })
export class UserHasRole extends Record {
	@ManyToOne(() => Role)
	role: Role;

	@ManyToOne(() => User)
	user: User;
}
