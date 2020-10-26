import { BeforeInsert, Column, Entity } from "typeorm";
import { Record } from "../system/Record";

@Entity("company", { schema: "core" })
export class Company extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "company";
	}

	@Column("varchar", { length: 80 })
	name: string;

	@Column("text", { default: "" })
	description: string;
}
