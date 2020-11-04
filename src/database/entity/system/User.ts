import {
	Entity,
	Column,
	ManyToMany,
	JoinTable,
	ManyToOne,
	BeforeInsert,
} from "typeorm";
import { Company } from "../core/Company";
import { Department } from "../core/Department";
import { Record } from "./Record";
import { Role } from "./Role";

@Entity("user", { schema: "system" })
export class User extends Record {
	@Column("text", { nullable: false, unique: true })
	user_name: string;

	@Column("text")
	first_name: string;

	@ManyToOne(() => Department)
	department: Department;

	@ManyToOne(() => Company)
	company: Company;

	@Column("text")
	last_name: string;

	@Column("text", { nullable: true })
	email: string;

	@Column("text")
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
