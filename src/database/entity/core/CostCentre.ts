import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { Record } from "../system/Record";
import { User } from "../system/User";

@Entity("cost_centre", { schema: "core" })
export class CostCentre extends Record {
	@BeforeInsert()
	setClassName() {
		this.class_name = "cost_centre";
	}

	@Column("varchar", { length: 255 })
	name: string;

	@Column("text")
	description: string;

	@Column("varchar", { length: 255, default: "" })
	code: string;

	@ManyToOne(() => User, { nullable: true })
	centre_head: User;
}
