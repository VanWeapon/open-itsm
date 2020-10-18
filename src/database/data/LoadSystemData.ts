import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { createConnection, getConnectionOptions } from "typeorm";
import { AccessControl } from "../entity/system/AccessControl";
import { Dictionary } from "../entity/system/Dictionary";
import { Group } from "../entity/system/Group";
import { Role } from "../entity/system/Role";
import { Table } from "../entity/system/Table";
import { UIAction } from "../entity/system/UIAction";
import { User } from "../entity/system/User";
// import { Table } from "../entity/system/Table";

/**
 * Create data for all the tables in the system schema
 * Roles/acls etc for non-system schemas will be created in separate load scripts
 */
const start = async () => {
	console.log(process.env.NODE_ENV);
	const options = await getConnectionOptions(process.env.NODE_ENV);
	const connection = await createConnection({
		...options,
		name: "production",
	});
	const created_by = "admin";
	const updated_by = "admin";
	await connection.query("TRUNCATE system.dbo CASCADE");
	await connection.query("TRUNCATE system.user CASCADE");
	await connection.query("TRUNCATE system.dictionary CASCADE");
	await connection.query("TRUNCATE system.field_label CASCADE");
	await connection.query("TRUNCATE system.acl CASCADE");
	await connection.query("TRUNCATE system.group CASCADE");
	await connection.query("TRUNCATE system.server_script CASCADE");
	await connection.query("TRUNCATE system.role CASCADE");

	/**
	 * @TABLES
	 */
	const dbos = connection.getRepository(Table).create([
		{ created_by, updated_by, name: "dbo", label: "Table" },
		{ created_by, updated_by, name: "user", label: "User" },
		{
			created_by,
			updated_by,
			name: "dictionary",
			label: "Dictionary",
		},
		{
			created_by,
			updated_by,
			name: "acl",
			label: "Access Control",
		},
		{
			created_by,
			updated_by,
			name: "field_label",
			label: "Field Label",
		},
		{
			created_by,
			updated_by,
			name: "group",
			label: "Group",
		},
		{
			created_by,
			updated_by,
			name: "ui_action",
			label: "UI Action",
		},
		{
			created_by,
			updated_by,
			name: "server_script",
			label: "Server Script",
		},
		{
			created_by,
			updated_by,
			name: "role",
			label: "Role",
		},
	]);

	await connection.getRepository(Table).save(dbos);

	/**
	 * @ROLES
	 */
	const roles = connection.getRepository(Role).create([
		{
			created_by,
			updated_by,
			name: "admin",
		},
		{
			created_by,
			updated_by,
			name: "itil",
		},
		{
			created_by,
			updated_by,
			name: "user",
		},
	]);

	connection.getRepository(Role).save(roles);
	const adminRole = roles.find((role) => role.name === "admin")!;
	const itilRole = roles.find((role) => role.name === "itil")!;
	const userRole = roles.find((role) => role.name === "user")!;

	/**
	 * @USERS
	 */
	const users = connection.getRepository(User).create([
		{
			first_name: "System",
			last_name: "Administrator",
			user_name: "admin",
			email: "admin@acme.com",
			user_roles: [adminRole],
			created_by,
			updated_by,
		},
		{
			first_name: "Itil",
			last_name: "Agent",
			user_name: "itil.agent",
			email: "itil.agent@acme.com",
			user_roles: [itilRole],
			created_by,
			updated_by,
		},
		{
			first_name: "End",
			last_name: "User",
			user_name: "end.user",
			email: "end.user@acme.com",
			user_roles: [userRole],
			created_by,
			updated_by,
		},
	]);

	connection.getRepository(User).save(users);

	const itilUser = users.find((user) => user.user_name === "itil.agent")!;
	const adminUser = users.find((user) => user.user_name === "admin")!;

	/**
	 * @ACLS
	 */

	const acls = connection.getRepository(AccessControl).create([
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "dbo")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "dbo")!,
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "dbo")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "dbo")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "acl")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "acl")!,
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "acl")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "acl")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "field_label")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "field_label")!,
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "field_label")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "field_label")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "group")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "group")!,
			requires_role: [itilRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "group")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "group")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "role")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "role")!,
			requires_role: [itilRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "role")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "role")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "server_script")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "server_script")!,
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "server_script")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "server_script")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "ui_action")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "ui_action")!,
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "ui_action")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "ui_action")!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "user")!,
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "user")!,
			requires_role: [itilRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "user")!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: dbos.find((tables) => tables.name === "user")!,
			requires_role: [adminRole],
			operation: "delete",
		},
	]);

	connection.getRepository(AccessControl).save(acls);

	/**
	 * @GROUPS
	 */
	const groups = connection.getRepository(Group).create([
		{
			created_by,
			updated_by,
			name: "Service Desk",
			contains_roles: [itilRole],
			group_members: [itilUser],
		},
		{
			created_by,
			updated_by,
			name: "OpenITSM Admins",
			contains_roles: [adminRole],
			group_members: [adminUser],
		},
	]);

	connection.getRepository(Group).save(groups);

	const actions = connection.getRepository(UIAction).create([
		{
			created_by,
			updated_by,
			name: "Save",
			order: 100,
			server: true,
			server_script: "this.save();",
			form_button: true,
			form_context: true,
			form_link: false,
			active: true,
			global: true,
		},
		{
			created_by,
			updated_by,
			name: "Copy",
			order: 200,
			server: true,
			server_script: "this.shallowCopy()",
			form_button: false,
			form_context: true,
			form_link: false,
			active: true,
			global: true,
		},
		{
			created_by,
			updated_by,
			name: "Copy with Relations",
			order: 300,
			server: true,
			server_script: "this.copyWithRelations()",
			form_button: false,
			form_context: true,
			form_link: false,
			active: true,
			global: true,
		},
	]);

	connection.getRepository(UIAction).save(actions);

	/**
	 * @DICTIONARY
	 */

	const dictionaries: Dictionary[] = [];
	dbos.forEach((table) => {
		const columns = connection.getRepository(table.name).metadata.columns;

		const autoGenerated = [
			"created",
			"created_by",
			"updated",
			"updated_by",
			"guid",
			"class_name",
			"updated_count",
		];

		columns.forEach((column) => {
			if (autoGenerated.includes(column.propertyName)) {
				return; // skip
			}
			const dictionary = connection.getRepository(Dictionary).create({
				active: true,
				created_by,
				updated_by,
				column_name: column.propertyName,
				column_label: column.propertyName,
				table,
				mandatory: !column.isNullable,
			});
			dictionaries.push(dictionary);
		});
	});
	connection.getRepository(Dictionary).save(dictionaries);
};

start();
