import { ChildEntity, Column, ManyToOne } from "typeorm";
import { Company } from "../core/Company";
import { ConfigurationItem } from "./ConfigurationItem";

@ChildEntity("hw")
export class Hardware extends ConfigurationItem {
	@Column("text", { default: "" })
	serial_number: string;

	@ManyToOne(() => Company, { nullable: true })
	manufacturer: Company;
}
