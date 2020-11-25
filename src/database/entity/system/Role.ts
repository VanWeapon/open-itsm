import { Record } from "./Record";
import { Entity, Column, OneToMany } from "typeorm";

@Entity("role", { schema: "system" })
export class Role extends Record {
	@Column("text")
	name: string;

	@OneToMany(() => Role, (r) => r.includes_roles)
	includes_roles: Role[];
}
