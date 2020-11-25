import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Record } from "./Record";
import { Dictionary } from "./Dictionary";
import { ACLRequiresRole } from "./m2m/ACLRequiresRole";

@Entity("acl", { schema: "system" })
export class AccessControl extends Record {
	@Column("boolean", { default: true }) active: boolean;

	@Column("text")
	table: string;

	@ManyToOne(() => Dictionary, {
		nullable: true,
		eager: true,
	})
	field: Dictionary;

	@Column("text")
	type: "record" | "field";

	@Column("text")
	operation: "create" | "read" | "update" | "delete";

	@OneToMany(() => ACLRequiresRole, (m2m) => m2m.acl, { nullable: true })
	requires_role: ACLRequiresRole[];
}
