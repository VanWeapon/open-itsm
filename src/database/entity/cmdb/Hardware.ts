import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Company } from "../core/Company";
import { ConfigurationItem } from "./ConfigurationItem";

@Entity("hw", { schema: "cmdb" })
export class Hardware extends ConfigurationItem {
	@BeforeInsert()
	setClassName() {
		this.class_name = "hw";
	}

	@Column("varchar", { length: 255 })
	serial_number: string;

	@ManyToOne(() => Company)
	manufacturer: Company;
}
