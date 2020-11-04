import { ChildEntity, Column } from "typeorm";
import { Hardware } from "./Hardware";

@ChildEntity("hw_computer")
export class Computer extends Hardware {
	@Column("text", { nullable: true })
	os: string;
}
