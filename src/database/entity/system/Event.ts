import { Column, Entity } from "typeorm";
import { Record } from "./Record";

@Entity("event", { schema: "system" })
export class Event extends Record {
	@Column("text")
	name: string;

	@Column("text")
	description: string;

	@Column("text", { nullable: true })
	table: string;
}
