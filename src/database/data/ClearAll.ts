import { getConnection } from "typeorm";

export const clearData = async () => {
	console.log(`Current execution environment: ${process.env.NODE_ENV}`);
	const connection = getConnection(process.env.NODE_ENV);
	await connection.query("TRUNCATE system.acl CASCADE");
	await connection.query("TRUNCATE system.acl_requires_role CASCADE");
	await connection.query("TRUNCATE system.event CASCADE");
	await connection.query("TRUNCATE system.event_action CASCADE");
	await connection.query("TRUNCATE system.event_queue_entry CASCADE");
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
	await connection.query("TRUNCATE core.location CASCADE");
	await connection.query("TRUNCATE core.task CASCADE");

	await connection.query("TRUNCATE itsm.itsm_task CASCADE");
	await connection.query("TRUNCATE itsm.sla_definition CASCADE");
	await connection.query("TRUNCATE itsm.task_sla CASCADE");

	await connection.query("TRUNCATE cmdb.ci CASCADE");
};
