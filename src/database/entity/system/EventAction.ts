import { Column, Entity } from "typeorm";
import { Record } from "./Record";

@Entity("event_action", { schema: "system" })
export class EventAction extends Record {
	@Column("text")
	event_name: string;

	@Column("text")
	script: string;
}
