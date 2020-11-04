import { ChildEntity, ManyToOne } from "typeorm";
import { Company } from "../core/Company";
import { ConfigurationItem } from "./ConfigurationItem";

@ChildEntity("application")
export class Application extends ConfigurationItem {
	@ManyToOne(() => Company, { nullable: true })
	vendor: Company;
}
