import { BeforeInsert, Entity } from "typeorm";
import { Record } from "../system/Record";

@Entity("location", { schema: "core" })
export class Location extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "location";
	}
}
