import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { getConnection } from "typeorm";
import { SystemUtil } from "../../util/SystemUtil";
import { AccessControl } from "../entity/system/AccessControl";
import { Dictionary } from "../entity/system/Dictionary";
import { Event } from "../entity/system/Event";
import { EventAction } from "../entity/system/EventAction";
import { Group } from "../entity/system/Group";
import { ACLRequiresRole } from "../entity/system/m2m/ACLRequiresRole";
import { GroupContainsRole } from "../entity/system/m2m/GroupContainsRole";
import { GroupMembership } from "../entity/system/m2m/GroupMembership";
import { Role } from "../entity/system/Role";
import { Table } from "../entity/system/Table";
import { UIAction } from "../entity/system/UIAction";
import { User } from "../entity/system/User";
const su = new SystemUtil();
/**
 * Create data for all the tables in the system schema
 * Roles/acls etc for non-system schemas will be created in separate load scripts
 */
export const loadSystemData = async () => {
	su.debug(
		`LoadSystemData: Current execution environment: ${process.env.NODE_ENV}`
	);
	const connection = getConnection(process.env.NODE_ENV);

	const created_by = "maint";
	const updated_by = "maint";

	/**
	 * @TABLES
	 */
	const dbos = connection.getRepository(Table).create([
		{
			created_by,
			updated_by,
			name: "dbo",
			label: "Table",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "user",
			label: "User",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "dictionary",
			label: "Dictionary",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "acl",
			label: "Access Control",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "acl_requires_role",
			label: "ACL Requires Role",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "field_label",
			label: "Field Label",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "group",
			label: "Group",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "group_membership",
			label: "Group Membership",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "ui_action",
			label: "UI Action",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "ui_action_requires_role",
			label: "UI Action Requires Role",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "server_script",
			label: "Server Script",
			table_scope: "system",
		},
		{
			created_by,
			updated_by,
			name: "role",
			label: "Role",
			table_scope: "system",
		},
	]);

	await connection.getRepository(Table).save(dbos);
	// return;
	/**
	 * @ROLES
	 */

	const roleRepo = connection.getRepository(Role);
	const adminRole = roleRepo.create({
		created_by,
		updated_by,
		name: "admin",
	});
	const itilRole = roleRepo.create({
		created_by,
		updated_by,
		name: "itil",
	});

	const userRole = roleRepo.create({
		created_by,
		updated_by,
		name: "user",
	});

	itilRole.includes_roles = [userRole];

	await connection.getRepository(Role).save([adminRole, itilRole, userRole]);

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

	await connection.getRepository(User).save(users);
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
			table: "dbo",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "dbo",
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "dbo",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "dbo",
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "acl",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "acl"!,
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "acl"!,
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "acl"!,
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "field_label",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "field_label",
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "field_label",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "field_label",
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "group",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "group",
			requires_role: [itilRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "group",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "group",
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "role",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "role",
			requires_role: [itilRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "role",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "role",
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "server_script",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "server_script",
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "server_script",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "server_script",
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "ui_action",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "ui_action",
			requires_role: [adminRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "ui_action",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "ui_action",
			requires_role: [adminRole],
			operation: "delete",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "user",
			requires_role: [adminRole],
			operation: "create",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "user",
			requires_role: [itilRole],
			operation: "read",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "user",
			requires_role: [adminRole],
			operation: "update",
		},
		{
			created_by,
			updated_by,
			type: "record",
			table: "user",
			requires_role: [adminRole],
			operation: "delete",
		},
	]);

	await connection.getRepository(AccessControl).save(acls);

	/**
	 * @ACLCONTAINSROLE
	 */
	acls.forEach(async (acl) => {
		const aclRole = connection.getRepository(ACLRequiresRole).create({
			acl,
			role: adminRole,
			created_by,
		});
		if (
			["user", "role", "group"].includes(acl.table) &&
			acl.operation === "read"
		) {
			const aclRole2 = connection.getRepository(ACLRequiresRole).create({
				acl,
				role: itilRole,
				created_by,
			});
			await connection.getRepository(ACLRequiresRole).save(aclRole2);
		}
		await connection.getRepository(ACLRequiresRole).save(aclRole);
	});

	/**
	 * @GROUPS
	 */
	const groups = connection.getRepository(Group).create([
		{
			created_by,
			name: "Service Desk",
		},
		{
			created_by,
			name: "OpenITSM Admins",
		},
		{
			created_by,
			name: "Server Support",
		},
	]);

	await connection.getRepository(Group).save(groups);

	const serviceDeskGroup = await connection
		.getRepository(Group)
		.findOne({ where: { name: "Service Desk" } });
	const adminGroup = await connection
		.getRepository(Group)
		.findOne({ where: { name: "OpenITSM Admins" } });
	const serverGroup = await connection
		.getRepository(Group)
		.findOne({ where: { name: "Server Support" } });

	const groupMembers = connection.getRepository(GroupMembership).create([
		{
			created_by,
			group: serviceDeskGroup,
			user: itilUser,
		},
		{
			created_by,
			group: serverGroup,
			user: itilUser,
		},
		{
			created_by,
			group: adminGroup,
			user: adminUser,
		},
	]);

	await connection.getRepository(GroupMembership).save(groupMembers);

	const groupRoles = connection.getRepository(GroupContainsRole).create([
		{
			created_by,
			group: serviceDeskGroup,
			role: itilRole,
		},
		{
			created_by,
			group: adminGroup,
			role: adminRole,
		},
	]);

	await connection.getRepository(GroupContainsRole).save(groupRoles);

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

	await connection.getRepository(UIAction).save(actions);

	/**
	 * @DICTIONARY
	 */

	// const dictionaries: Dictionary[] = [];
	dbos.forEach((table) => {
		const columns = connection.getRepository(table.name).metadata.columns;

		const autoGenerated = [
			"created",
			"created_by",
			"updated",
			"updated_by",
			"guid",
			"class_name",
			"update_count",
			"scope",
		];

		columns.forEach(async (column) => {
			if (autoGenerated.includes(column.propertyName)) {
				return; // skip
			}

			const name = column.propertyName;
			const label = (
				name.charAt(0).toUpperCase() + name.substring(1)
			).replace("_", " ");
			const dictionary = connection.getRepository(Dictionary).create({
				active: true,
				created_by,
				updated_by,
				column_name: name,
				column_label: label,
				table: table.name,
				type: column.type || "text",
				mandatory: !column.isNullable,
			});
			await connection.getRepository(Dictionary).save(dictionary);
			// dictionaries.push(dictionary);
		});
	});
	// await connection.getRepository(Dictionary).save(dictionaries);

	const events = connection.getRepository(Event).create([
		{
			name: "system.entity.create",
			created_by,
			updated_by,
			description: "Create a new entity",
		},
	]);

	await connection.getRepository(Event).save(events);

	const eventActions = connection.getRepository(EventAction).create([
		{
			created_by,
			event_name: "system.entity.create",
			script: ``,
		},
	]);

	await connection.getRepository(EventAction).save(eventActions);
};
