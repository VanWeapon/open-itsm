import { BeforeInsert, Column, Entity } from "typeorm";
import { Record } from "../system/Record";

@Entity("sla_definition", { schema: "itsm" })
export class SLADefinition extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "sla_definition";
	}

	@Column("varchar", { length: 255 })
	name: string;
}
