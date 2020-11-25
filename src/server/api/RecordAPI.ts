import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
import { getConnection, Repository } from "typeorm";
import { validate } from "uuid";
import { Dictionary } from "../../database/entity/system/Dictionary";
import { Record } from "../../database/entity/system/Record";
import { Table } from "../../database/entity/system/Table";
import { DBUtil } from "../../util/DBUtil";
import { SystemUtil } from "../../util/SystemUtil";
const su = new SystemUtil();
/**
 * RecordAPI
 * Retreives or inserts records into a given table
 * Tablename must be passed as a query parameter like so:
 * /api/record/incident where incident is the table name
 * E.g.
 * GET /api/record/incident?number=INC001234
 * will query for a record in the incident table that matches the number of INC001234
 */
export class RecordAPI {
	public static async get(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const connection = await new DBUtil().connect();
		if (!connection) {
			ctx.status = 500;
			ctx.body = "Error connecting to database";
			await next();
			return;
		}
		const dboRepository = connection.getRepository(Table);
		const tableName = ctx.params.table;
		const id = ctx.params.id || null;
		let repository: Repository<Record>;
		let dbo: Table | undefined;

		try {
			dbo = await dboRepository.findOne({
				where: { name: tableName },
			});
			if (!dbo) {
				throw new Error("dbo reference not found");
			}
			su.debug(
				`Name: ${dbo.name}\nExtents: ${dbo.extends}\nRoot: ${dbo.extends_root}\nScope: ${dbo.table_scope}`
			);
			// tslint:disable-next-line: prefer-conditional-expression
			if (dbo.extends) {
				repository = connection.getRepository(`${dbo.extends_root}`);
			} else {
				repository = connection.getRepository(`${dbo.name}`);
			}
		} catch (e) {
			ctx.status = 404;
			ctx.body = `Table name: ${tableName} does not exist`;
			if (process.env.NODE_ENV === "development") {
				ctx.body += `\n${e}`;
			}
			await next();
			return;
		}

		const entityName = dbo.name;
		const repoName = repository.metadata.name;
		su.debug(`Connected to ${repoName} repo for table ${entityName}`);
		if (id) {
			try {
				const record = await RecordAPI.getByID(id, repository);
				if (record) {
					ctx.status = 200;
					ctx.body = record;
					await next();
					return;
				} else {
					ctx.status = 404;
					ctx.body = "No " + entityName + " found with ID of " + id;
					await next();
					return;
				}
			} catch (e) {
				ctx.status = 400;
				ctx.body = e.message;
				await next();
				return;
			}
		} else {
			const records = await repository.find({
				where: { class_name: entityName },
				loadRelationIds: true,
			});
			records.forEach(async (record) => {
				for (const key in record) {
					if (key !== "guid" && validate(record[key])) {
						// this is a guid field referencing something
						const dictionaryEntry = await connection
							.getRepository(Dictionary)
							.findOne({
								where: { column_name: key, table: entityName },
							});
						const refTable = dictionaryEntry?.reference_table;
						if (!refTable) {
							ctx.status = 500;
							ctx.body +=
								"Reftable failed for " +
								dictionaryEntry?.column_name;
						}
						const displayField = await connection
							.getRepository(Dictionary)
							.findOne({
								where: { table: entityName, display: true },
							});

						if (displayField) {
							// const referenceRecord = await connection
							// 	.getRepository<Record>(refTable!)
							// 	.findOne(record[key]);
							// const displayValue = referenceRecord![
							// 	displayField.column_name
							// ];
							// const refFieldObj = {
							// 	value: record[key],
							// 	display: displayValue,
							// };
						}
					}
				}
			});

			if (records) {
				ctx.status = 200;
				ctx.body = records;
				await next();
				return;
			} else {
				ctx.status = 404;
				ctx.body = `No records found for table ${tableName}`;
				await next();
				return;
			}
		}

		await next();
	}

	private static async getByID(
		id: string,
		repo: Repository<any>
	): Promise<any | null> {
		const record = await repo.findOne(id);
		if (record) {
			return record;
		} else {
			return null;
		}
	}

	public static async post(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		const tableName = ctx.params.table;

		const connection = await getConnection(process.env.NODE_ENV);
		let repository: Repository<Record>;
		try {
			repository = connection.getRepository(tableName);
		} catch (e) {
			ctx.response.status = 404;
			ctx.response.body = `Table with name ${tableName} does not exits`;
			await next();
			return;
		}

		try {
			const record = repository.create({
				...(ctx.request.body as object),
			})!;
			record.created_by =
				(ctx.req.headers["x-user"] as string) || "nouser";

			const inserted = await repository.save(record);
			ctx.response.status = 201;
			ctx.response.body = inserted;
		} catch (e) {
			ctx.response.status = 400;
			ctx.response.body = "Invalid fields: " + e;
		} finally {
			await next();
		}
	}

	public static async put(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		await next();
	}

	public static async delete(
		_ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		await next();
	}
}
