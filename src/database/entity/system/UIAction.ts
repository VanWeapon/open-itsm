import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Record } from "./Record";
import { Role } from "./Role";

@Entity("ui_action", { schema: "system" })
export class UIAction extends Record {
	@Column("text")
	name: string;

	@Column("boolean", { default: true })
	active: boolean;

	@Column("text", { default: "global" })
	table: string;

	@Column("boolean", { default: false })
	global: boolean;

	@Column("int", { default: 100 })
	order: number;

	@Column("text", { default: "" })
	description: string;

	@Column("text", { default: "" })
	tooltip: string;

	@Column("boolean", { default: false })
	form_button: boolean;

	@Column("boolean", { default: false })
	form_context: boolean;

	@Column("boolean", { default: false })
	form_link: boolean;

	@Column("boolean", { default: false })
	list_button: boolean;

	@Column("boolean", { default: false })
	list_context: boolean;

	@Column("boolean", { default: false })
	list_link: boolean;

	@Column("boolean", { default: false })
	client: boolean;

	@Column("boolean", { default: false })
	server: boolean;

	@Column("text", { default: "" })
	client_script: string;

	@Column("text", { default: "" })
	server_script: string;

	@ManyToMany(() => Role, { nullable: true })
	@JoinTable({ name: "ui_action_requires_role" })
	requires_role: Role[];
}
