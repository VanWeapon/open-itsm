import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { getConnection } from "typeorm";
import { Company } from "../entity/core/Company";
import { CostCentre } from "../entity/core/CostCentre";
import { Department } from "../entity/core/Department";
import { AccessControl } from "../entity/system/AccessControl";
import { Role } from "../entity/system/Role";
import { Table } from "../entity/system/Table";
import { User } from "../entity/system/User";

export const loadCoreData = async () => {
	console.log(`Current execution environment: ${process.env.NODE_ENV}`);
	const connection = getConnection(process.env.NODE_ENV);

	console.log(`Connection name: ${connection.name}`);
	const created_by = "admin";

	const dbos = connection.getRepository(Table).create([
		{ created_by, name: "company", label: "Company", table_scope: "core" },
		{
			created_by,
			name: "cost_centre",
			label: "Cost Centre",
			table_scope: "core",
		},
		{
			created_by,
			name: "department",
			label: "Department",
			table_scope: "core",
		},
		{
			created_by,
			name: "location",
			label: "Location",
			table_scope: "core",
		},
		{ created_by, name: "task", label: "Task", table_scope: "core" },
	]);

	await connection.getRepository(Table).save(dbos);

	const adminRole = await connection
		.getRepository(Role)
		.findOne({ where: { name: "admin" } });
	const itilRole = await connection
		.getRepository(Role)
		.findOne({ where: { name: "itil" } });

	const userRole = await connection
		.getRepository(Role)
		.findOne({ where: { name: "user" } });

	const acls = connection.getRepository(AccessControl).create([
		{
			created_by,
			table: "company",
			operation: "read",
			type: "record",
			requires_role: [userRole!],
		},
		{
			created_by,
			table: "company",
			operation: "create",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "company",
			operation: "update",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "company",
			operation: "delete",
			type: "record",
			requires_role: [adminRole!],
		},
		{
			created_by,
			table: "cost_centre",
			operation: "read",
			type: "record",
			requires_role: [userRole!],
		},
		{
			created_by,
			table: "cost_centre",
			operation: "create",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "cost_centre",
			operation: "update",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "cost_centre",
			operation: "delete",
			type: "record",
			requires_role: [adminRole!],
		},
		{
			created_by,
			table: "department",
			operation: "read",
			type: "record",
			requires_role: [userRole!],
		},
		{
			created_by,
			table: "department",
			operation: "create",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "department",
			operation: "update",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "department",
			operation: "delete",
			type: "record",
			requires_role: [adminRole!],
		},
		{
			created_by,
			table: "location",
			operation: "read",
			type: "record",
			requires_role: [userRole!],
		},
		{
			created_by,
			table: "location",
			operation: "create",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "location",
			operation: "update",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "location",
			operation: "delete",
			type: "record",
			requires_role: [adminRole!],
		},
		{
			created_by,
			table: "task",
			operation: "read",
			type: "record",
			requires_role: [userRole!],
		},
		{
			created_by,
			table: "task",
			operation: "create",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "task",
			operation: "update",
			type: "record",
			requires_role: [itilRole!],
		},
		{
			created_by,
			table: "task",
			operation: "delete",
			type: "record",
			requires_role: [adminRole!],
		},
	]);

	await connection.getRepository(AccessControl).save(acls);

	const companies = connection.getRepository(Company).create([
		{
			created_by,
			name: "ACME Corp",
		},
		{
			created_by,
			name: "Evil Corp",
		},
		{
			name: "Microsoft",
			created_by,
		},
		{
			name: "Apple",
			created_by,
		},
		{
			name: "Google",
			created_by,
		},
	]);

	await connection.getRepository(Company).save(companies);

	const acmeCorp = companies.find((comp) => comp.name === "ACME Corp")!;
	const evilCorp = companies.find((comp) => comp.name === "Evil Corp")!;

	const departments = connection.getRepository(Department).create([
		{
			created_by,
			name: "Information Technology",
			company: acmeCorp,
		},
		{
			name: "Finance",
			created_by,
			company: acmeCorp,
		},
	]);

	await connection.getRepository(Department).save(departments);

	const itDept = departments.find(
		(dept) => dept.name === "Information Technology"
	)!;
	const finDept = departments.find((dept) => dept.name === "Finance");
	const ccs = connection.getRepository(CostCentre).create([
		{
			name: "Software",
			created_by,
			code: "1001",
			department: itDept,
		},
		{
			name: "Managed Services",
			code: "1002",
			created_by,
			department: itDept,
		},
		{
			name: "Accounting",
			code: "1003",
			created_by,
			department: finDept,
		},
	]);

	await connection.getRepository(CostCentre).save(ccs);

	const users = await connection.getRepository(User).find();
	const endUser = users.find((user) => user.user_name === "end.user")!;
	const itilUser = users.find((user) => user.user_name === "itil.agent")!;
	const adminUser = users.find((user) => user.user_name === "admin")!;

	endUser.company = evilCorp;
	itilUser.company = acmeCorp;
	itilUser.department = itDept;
	adminUser.company = acmeCorp;
	adminUser.department = itDept;

	await connection.getRepository(User).save([endUser, itilUser, adminUser]);
};
