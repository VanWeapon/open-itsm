import { Column, Entity } from "typeorm";
import { Record } from "../system/Record";

@Entity("company", { schema: "core" })
export class Company extends Record {
	@Column("text")
	name: string;

	@Column("text", { default: "" })
	description: string;
}
