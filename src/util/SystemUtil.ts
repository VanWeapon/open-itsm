import { promisify } from "util";
import { OpenITSMLogger } from "./Logger";

/**
 * @name SystemUtil
 * @description Utility class for interacting with the backend system processes,
 * not related to direct database operations
 */
export class SystemUtil {
	private logger = new OpenITSMLogger();

	/**
	 * Wait for a period of time before executing the next lines in script
	 * Can be handy for debugging, but generally not good to keep in production scripts
	 * @param {number} ms time in milliseconds to wait
	 * @param {T} value generic value to return after waiting
	 * @example
	 * await new SystemUtil().sleep(3000); //Waits 3 seconds before continuing.
	 */
	public sleep = promisify(setTimeout);

	/**
	 * Generic log function where a log level can be specified
	 * @param msg Message to be written to the logs, can be string or an object
	 * @param level What level to write the log at
	 */
	public log(msg: any, level: "error" | "warn" | "info" | "debug") {
		this.writeLog(msg, level);
	}

	/**
	 * Writes to error logs
	 * @param msg Error message to be written to the logs
	 */
	public error(msg: any) {
		this.writeLog(msg, "error");
	}

	/**
	 * Writes to warning logs
	 * @param msg Warning message to be written to the logs
	 */
	public warn(msg: any) {
		this.writeLog(msg, "warn");
	}

	/**
	 * Writes to information logs
	 * @param msg message to be written to the logs
	 */
	public info(msg: any) {
		this.writeLog(msg, "info");
	}

	/**
	 * Writes to debug logs
	 * @param msg Debug message to be written to the logs
	 */
	public debug(msg: any) {
		this.writeLog(msg, "debug");
	}

	private writeLog(msg: any, level: "error" | "warn" | "info" | "debug") {
		this.logger.log(msg, level);
	}
}
