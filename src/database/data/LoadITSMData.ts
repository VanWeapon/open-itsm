import "reflect-metadata";
import { getConnection } from "typeorm";
import { Incident } from "../entity/itsm/Incident";
import { SLADefinition } from "../entity/itsm/SLADefinition";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();

export const loadItsmData = async () => {
	const connection = getConnection(process.env.NODE_ENV);

	const created_by = "admin";

	const slaDefintions = connection.getRepository(SLADefinition).create([
		{
			created_by,
			name: "Incident 5 day",
		},
	]);

	await connection.getRepository(SLADefinition).save(slaDefintions);

	const incidents = connection.getRepository(Incident).create([
		{
			created_by,
			summary: "Email is down",
			details: "Email is down for all users at the head office",
			impact: 2,
			urgency: 2,
		},

		{
			created_by,
			summary: "Dev server crashing",
			details:
				"Whenever i start this thing it keeps crashing with errors",
			impact: 4,
			urgency: 4,
		},
	]);
	await connection.getRepository(Incident).save(incidents);
};
