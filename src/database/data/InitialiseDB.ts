import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { createConnection, getConnectionOptions } from "typeorm";

const start = async () => {
	const options = await getConnectionOptions(process.env.NODE_ENV);
	const connection = await createConnection({ ...options, name: "default" });
	const created_by = "admin";
	const updated_by = "admin";

	// Tables
	connection
		.createQueryBuilder()
		.insert()
		.into("s_dbo")
		.values([
			{ created_by, updated_by, name: "s_dbo", label: "Table" },
			{ created_by, updated_by, name: "s_user", label: "User" },
			{
				created_by,
				updated_by,
				name: "s_dictionary",
				label: "Dictionary",
			},
			{
				created_by,
				updated_by,
				name: "s_field_class",
				label: "Field Class",
			},
			{
				created_by,
				updated_by,
				name: " s_acl",
				label: "Access Control",
			},
			{
				created_by,
				updated_by,
				name: "s_field_label",
				label: "Field Label",
			},
			{
				created_by,
				updated_by,
				name: "s_group",
				label: "Group",
			},
		]);

	// Users
	connection
		.createQueryBuilder()
		.insert()
		.into("s_user")
		.values([
			{
				first_name: "System",
				last_name: "Administrator",
				user_name: "admin",
			},
		]);
};

start();
