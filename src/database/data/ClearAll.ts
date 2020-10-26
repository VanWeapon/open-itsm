import { getConnection } from "typeorm";

export const clearData = async () => {
	console.log(`Current execution environment: ${process.env.NODE_ENV}`);
	const connection = getConnection(process.env.NODE_ENV);
	await connection.query("TRUNCATE system.acl CASCADE");
	await connection.query("TRUNCATE system.acl_requires_role CASCADE");
	await connection.query("TRUNCATE system.dictionary CASCADE");
	await connection.query("TRUNCATE system.field_label CASCADE");
	await connection.query("TRUNCATE system.group CASCADE");
	await connection.query("TRUNCATE system.role CASCADE");
	await connection.query("TRUNCATE system.server_script CASCADE");
	await connection.query("TRUNCATE system.dbo CASCADE");
	await connection.query("TRUNCATE system.ui_action CASCADE");
	await connection.query("TRUNCATE system.user CASCADE");

	await connection.query("TRUNCATE core.company CASCADE");
	await connection.query("TRUNCATE core.department CASCADE");
	await connection.query("TRUNCATE core.cost_centre CASCADE");
	await connection.query("TRUNCATE core.task CASCADE");

	await connection.query("TRUNCATE itsm.incident CASCADE");
	await connection.query("TRUNCATE itsm.incident_task CASCADE");
	await connection.query("TRUNCATE itsm.change CASCADE");
	await connection.query("TRUNCATE itsm.change_task CASCADE");
	await connection.query("TRUNCATE itsm.sla_definition CASCADE");
	await connection.query("TRUNCATE itsm.task_sla CASCADE");

	await connection.query("TRUNCATE cmdb.ci CASCADE");
	await connection.query("TRUNCATE cmdb.hw CASCADE");
	await connection.query("TRUNCATE cmdb.hw_computer CASCADE");
};
