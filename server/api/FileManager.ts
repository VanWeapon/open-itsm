import * as fs from "fs/promises";
import * as path from "path";
import { ParameterizedContext, Next } from "koa";
import { IRouterParamContext } from "koa-router";
export class FileManager {
	public static projectRoot: string = process.env.projectRoot;
	public static sharedSchemaPath: string = path.resolve(
		FileManager.projectRoot,
		"./shared/schemas"
	);

	public static async createFile(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {}

	public static async updateFile(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {}

	/**
	 * GET /api/file/
	 * @returns string[] filenames
	 */
	public static async getFiles(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		console.log("getFiles Process Root" + FileManager.projectRoot);
		console.log("getFiles SharedSchemaPath" + FileManager.sharedSchemaPath);
		try {
			const fileNames: string[] = await fs.readdir(
				FileManager.sharedSchemaPath
			);
			ctx.status = 200;
			ctx.response.body = JSON.stringify(fileNames);
		} catch (error) {
			ctx.status = 400;
			ctx.response.body = error;
		} finally {
			next();
		}
	}

	/**
	 * GET /api/file/:table
	 *
	 */
	public static async getFileByName(
		ctx: ParameterizedContext<any, IRouterParamContext<any, {}>>,
		next: Next
	) {
		try {
			const reqFileName = ctx.params.table + ".ts";
			console.log("getFileByName reqFileName: " + reqFileName);
			const fileContentBuffer = await fs.readFile(
				path.resolve(FileManager.sharedSchemaPath, reqFileName)
			);
			const fileStr = fileContentBuffer.toString("utf8");
			ctx.status = 200;
			ctx.response.set("Content-Type", "application/javascript");
			ctx.response.body = fileStr;
		} catch (error) {
			ctx.status = 400;
			ctx.response.body = error;
		} finally {
			next();
		}
	}
}
