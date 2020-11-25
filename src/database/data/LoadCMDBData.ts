import "reflect-metadata";
import { getConnection } from "typeorm";
import { SystemUtil } from "../../util/SystemUtil";
import { Application } from "../entity/cmdb/Application";
import { Computer } from "../entity/cmdb/Computer";
import { Company } from "../entity/core/Company";
import { Group } from "../entity/system/Group";
import { Table } from "../entity/system/Table";
import { User } from "../entity/system/User";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();

const su = new SystemUtil();
export const loadCMDBData = async () => {
	su.info(
		`LoadCMDBData: Current execution environment: ${process.env.NODE_ENV}`
	);
	const connection = getConnection(process.env.NODE_ENV);

	const created_by = "maint";

	const dbos = connection.getRepository(Table).create([
		{
			created_by,
			name: "ci",
			label: "Configuration Item",
			table_scope: "cmdb",
		},
		{
			created_by,
			name: "hw",
			label: "Hardware",
			table_scope: "cmdb",
			extends: "cmdb.ci",
			extends_root: "cmdb.ci",
		},
		{
			created_by,
			name: "hw_computer",
			label: "Computer",
			table_scope: "cmdb",
			extends: "cmdb.hw",
			extends_root: "cmdb.ci",
		},
		{
			created_by,
			name: "application",
			label: "Application",
			table_scope: "cmdb",
			extends: "cmdb.ci",
			extends_root: "cmdb.ci",
		},
	]);

	await connection.getRepository(Table).save(dbos);

	const endUser = await connection
		.getRepository(User)
		.findOne({ where: { user_name: "end.user" } });
	const itilUser = await connection
		.getRepository(User)
		.findOne({ where: { user_name: "itil.agent" } });

	const serviceDesk = await connection
		.getRepository(Group)
		.findOne({ where: { name: "Service Desk" } });
	const serverTeam = await connection
		.getRepository(Group)
		.findOne({ where: { name: "Server Support" } });

	const computers = connection.getRepository(Computer).create([
		{
			name: "End Users PC",
			created_by,
			serial_number: "PC001",
			os: "Windows 10",
			primary_owner: endUser,
			support_group: serviceDesk,
			environment: "production",
		},
		{
			name: "Linux Server",
			created_by,
			serial_number: "SERV001",
			os: "Linux",
			primary_owner: itilUser,
			support_group: serverTeam,
			environment: "development",
		},
		{
			name: "Support Desktop",
			created_by,
			serial_number: "DESK001",
			os: "Windows 10",
			primary_owner: itilUser,
			support_group: serviceDesk,
			environment: "production",
		},
	]);

	await connection.getRepository(Computer).save(computers);

	const google = await connection
		.getRepository(Company)
		.findOne({ where: { name: "Google" } });
	const microsoft = await connection
		.getRepository(Company)
		.findOne({ where: { name: "Microsoft" } });

	const apps = connection.getRepository(Application).create([
		{
			name: "Google Chrome",
			support_group: serviceDesk,
			vendor: google,
			created_by,
		},
		{
			name: "Slack",
			support_group: serviceDesk,
			created_by,
		},
		{
			name: "Outlook",
			support_group: serviceDesk,
			vendor: microsoft,
			created_by,
		},
	]);

	await connection.getRepository(Application).save(apps);
};
