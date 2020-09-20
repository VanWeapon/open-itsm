import { Entity, BeforeInsert, Column, ColumnType } from "typeorm";
import { Record } from "./Record";

@Entity("s_field_class")
export class FieldClass extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "s_field_class";
	}

	@Column("varchar", { length: 40 })
	name: ColumnType;
}
