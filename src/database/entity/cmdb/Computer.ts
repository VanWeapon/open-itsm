import { BeforeInsert, Column, Entity } from "typeorm";
import { Hardware } from "./Hardware";

@Entity("hw_computer", { schema: "cmdb" })
export class Computer extends Hardware {
	@BeforeInsert()
	setClassName() {
		this.class_name = "hw_computer";
	}

	@Column("text", { nullable: true })
	os: string;
}
