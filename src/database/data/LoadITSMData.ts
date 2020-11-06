import "reflect-metadata";
import { getConnection } from "typeorm";
import { Application } from "../entity/cmdb/Application";
import { Computer } from "../entity/cmdb/Computer";
import { Incident } from "../entity/itsm/Incident";
import { SLADefinition } from "../entity/itsm/SLADefinition";
import { Table } from "../entity/system/Table";
import { User } from "../entity/system/User";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();

export const loadItsmData = async () => {
	const connection = getConnection(process.env.NODE_ENV);

	const created_by = "maint";

	const dbos = connection.getRepository(Table).create([
		{
			created_by,
			name: "incident",
			label: "Incident",
			table_scope: "itsm",
			extends: "core.task",
		},
		{
			created_by,
			name: "incident_task",
			label: "Incident Task",
			table_scope: "itsm",
			extends: "core.task",
		},
		{
			created_by,
			name: "change",
			label: "Change",
			table_scope: "itsm",
			extends: "core.task",
		},
		{
			created_by,
			name: "change_task",
			label: "Change Task",
			table_scope: "itsm",
			extends: "core.task",
		},
		{
			created_by,
			name: "sla_definition",
			label: "SLA Definition",
			table_scope: "itsm",
		},
		{
			created_by,
			name: "task_sla",
			label: "Task SLA",
			table_scope: "itsm",
		},
	]);

	await connection.getRepository(Table).save(dbos);

	const slaDefintions = connection.getRepository(SLADefinition).create([
		{
			created_by,
			name: "Incident 5 day",
		},
	]);

	await connection.getRepository(SLADefinition).save(slaDefintions);

	const endUser = await connection
		.getRepository(User)
		.findOne({ where: { user_name: "end.user" } });
	const itilUser = await connection
		.getRepository(User)
		.findOne({ where: { user_name: "itil.agent" } });

	const serverCI = await connection
		.getRepository(Computer)
		.findOne({ where: { name: "Linux Server" } });

	const outlookCI = await connection
		.getRepository(Application)
		.findOne({ where: { name: "Outlook" } });

	const incidents = connection.getRepository(Incident).create([
		{
			created_by,
			assignee: itilUser,
			authorised_contact: endUser,
			config_item: outlookCI,
			summary: "Email is down",
			details: "Email is down for all users at the head office",
			impact: 2,
			urgency: 2,
		},

		{
			created_by,
			assignee: itilUser,
			authorised_contact: endUser,
			summary: "Dev server crashing",
			config_item: serverCI,
			details:
				"Whenever i start this thing it keeps crashing with errors",
			impact: 4,
			urgency: 4,
		},
	]);
	const incs = await connection.getRepository(Incident).save(incidents);

	if (incs) {
		return true;
	} else {
		return false;
	}
};
