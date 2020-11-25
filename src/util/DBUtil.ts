import {
	Connection,
	createConnection,
	getConnection,
	getConnectionOptions,
} from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { SystemUtil } from "./SystemUtil";

/**
 * Internal class for managing db connection and complex direct-database operations
 */
export class DBUtil {
	/**
	 * Creates or gets the connection to the database using NODE_ENV as the connection name
	 * @param logLevel the logging level of the database connection
	 */
	public connect = async (logLevel?: "query" | "info" | "warn" | "error") => {
		const su = new SystemUtil();
		su.info(`connect | calling function`);
		let connection: Connection | null;
		try {
			connection = getConnection(process.env.NODE_ENV);
		} catch {
			su.info(`connect | connection does not exist, getting new one`);
			connection = null;
		}

		if (!connection) {
			try {
				const connectionOptions = await getConnectionOptions(
					process.env.NODE_ENV
				);
				if (logLevel) {
					connection = await createConnection({
						...connectionOptions,
						logging: [logLevel],
						name: process.env.NODE_ENV,
						namingStrategy: new SnakeNamingStrategy(),
					});
				} else {
					connection = await createConnection({
						...connectionOptions,
						name: process.env.NODE_ENV,
						namingStrategy: new SnakeNamingStrategy(),
					});
				}
			} catch (error) {
				su.error(error);
				console.error(error);
			}
		}

		if (!connection) {
			su.warn(`connect | connection could not be created, retuning null`);
		}
		return connection;
	};

	/**
	 * Disconnects the api server from the database.
	 */
	public disconnect = async () => {
		const su = new SystemUtil();
		su.info(`disconnecting from database`);

		const connection = getConnection(process.env.NODE_ENV);
		await connection.close();
	};
}
