import { Logger, createLogger, transports, format, config } from "winston";

/**
 * Internal class for executing instructions to write log messages
 *
 */
export class OpenITSMLogger {
	private logger: Logger;
	constructor() {
		if (!this.logger) {
			this.logger = createLogger({
				level: "debug",
				format: format.combine(
					format.timestamp(),
					format.printf(
						(info) =>
							`${info.timestamp} - ${info.level.toUpperCase()}: ${
								info.message
							}`
					)
				),
				levels: config.npm.levels,
				exceptionHandlers: [
					new transports.File({
						filename: "log/error.log",
						level: "error",
					}),
				],
				transports: [
					new transports.File({
						filename: "log/error.log",
						level: "error",
					}),
					new transports.File({
						filename: "log/warn.log",
						level: "warn",
					}),
					new transports.File({
						filename: "log/info.log",
						level: "info",
					}),
					new transports.File({
						filename: "log/debug.log",
						level: "debug",
					}),
				],
			});

			if (process.env.NODE_ENV !== "production") {
				this.logger.add(
					new transports.Console({
						format: format.cli(),
					})
				);
			}
		}
	}

	public log(msg: any, level: "error" | "warn" | "info" | "debug") {
		this._log(msg, level);
	}

	private _log(msg: any, level: "error" | "warn" | "info" | "debug") {
		this.logger.log(level, msg);
	}
}
