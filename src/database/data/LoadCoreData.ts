import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv").config();
import { getConnection } from "typeorm";
import { Company } from "../entity/core/Company";
import { CostCentre } from "../entity/core/CostCentre";
import { Department } from "../entity/core/Department";
import { User } from "../entity/system/User";

export const loadCoreData = async () => {
	console.log(`Current execution environment: ${process.env.NODE_ENV}`);
	const connection = getConnection(process.env.NODE_ENV);

	console.log(`Connection name: ${connection.name}`);
	const created_by = "admin";
	const updated_by = "admin";

	const companies = connection.getRepository(Company).create([
		{
			created_by,
			updated_by,
			name: "ACME Corp",
		},
		{
			created_by,
			updated_by,
			name: "Evil Corp",
		},
	]);

	await connection.getRepository(Company).save(companies);

	const acmeCorp = companies.find((comp) => comp.name === "ACME Corp")!;
	const evilCorp = companies.find((comp) => comp.name === "Evil Corp")!;

	const departments = connection.getRepository(Department).create([
		{
			created_by,
			updated_by,
			name: "Information Technology",
			company: acmeCorp,
		},
		{
			name: "Finance",
			created_by,
			updated_by,
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
			updated_by,
			code: "1001",
			department: itDept,
		},
		{
			name: "Managed Services",
			code: "1002",
			created_by,
			updated_by,
			department: itDept,
		},
		{
			name: "Accounting",
			code: "1003",
			created_by,
			updated_by,
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
