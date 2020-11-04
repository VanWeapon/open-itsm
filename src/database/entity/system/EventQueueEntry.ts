import { Column, Entity, ManyToOne } from "typeorm";
import { Event } from "./Event";
import { Record } from "./Record";

export enum EventQueueStatus {
	"QUEUED",
	"READY",
	"PROCESSING",
	"PROCESSED",
}

@Entity("event_queue_entry", { schema: "system" })
export class EventQueueEntry extends Record {
	@ManyToOne(() => Event)
	event: Event;

	@Column("enum", {
		enum: EventQueueStatus,
		default: EventQueueStatus.QUEUED,
	})
	status: EventQueueStatus;

	@Column("text", { default: "" })
	message: string;

	@Column("json", { nullable: true })
	parameters: JSON;

	@Column("uuid", { nullable: true })
	record: string;
}
