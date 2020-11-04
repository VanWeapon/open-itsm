import { Column, Entity } from "typeorm";
import { Record } from "../system/Record";

@Entity("sla_definition", { schema: "itsm" })
export class SLADefinition extends Record {
	@Column("text")
	name: string;
}
