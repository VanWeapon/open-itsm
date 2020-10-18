import {
	Entity,
	Column,
	BeforeInsert,
	ManyToMany,
	JoinTable,
	ManyToOne,
} from "typeorm";
import { Department } from "../core/Department";
import { Record } from "./Record";
import { Role } from "./Role";

@Entity("user", { schema: "system" })
export class User extends Record {
	@BeforeInsert()
	setClassName(): void {
		this.class_name = "user";
	}
	@Column("varchar", { length: 40, nullable: false, unique: true })
	user_name: string;

	@Column("varchar", { length: 127 })
	first_name: string;

	@ManyToOne(() => Department)
	department: Department;

	@Column("varchar", { length: 127 })
	last_name: string;

	@Column("varchar", { length: 255, nullable: false })
	email: string;

	@Column("varchar", { length: 255 })
	name: string;

	@BeforeInsert()
	setFullName() {
		if (
			this.first_name &&
			this.last_name &&
			this.name !== `${this.first_name} ${this.last_name}`
		) {
			this.name = `${this.first_name} ${this.last_name}`;
		}
	}

	@ManyToMany(() => Role)
	@JoinTable({ name: "user_has_role" })
	user_roles: Role[];
}
