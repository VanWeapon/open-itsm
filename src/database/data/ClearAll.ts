import { connect } from "net";
import { getConnection } from "typeorm";
import { SystemUtil } from "../../util/SystemUtil";
const su = new SystemUtil();
export const clearData = async () => {
	su.debug(`Current execution environment: ${process.env.NODE_ENV}`);
	const connection = getConnection(process.env.NODE_ENV);
	for (const entity of connection.entityMetadatas) {
		su.debug(`Dropping data from ${entity.name}`);
		await connection.query(
			`TRUNCATE ${entity.schema}.${entity.tableName} CASCADE`
		);
	}
};
