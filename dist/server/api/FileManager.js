"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
/**
 * @name FileManager - contains methods for reading, parsing and retreiving files throughout the open-itsm project directory via API calls
 * @static
 * @property {string} projectRoot - the root directory for this project, initialised through process.env.projectRoot when the API is started
 * @property {string} sharedSchemaPath - the directory of the shared/schemas folder
 */
class FileManager {
    static async createFile(ctx, next) {
        ctx.body = "Method not implemented, come back later";
    }
    static async updateFile(ctx, next) {
        ctx.body = "Method not implemented, come back later";
    }
    /**
     * GET /api/file/
     * @returns string[] filenames
     */
    static async getFiles(ctx, next) {
        console.log("getFiles Process Root" + FileManager.projectRoot);
        console.log("getFiles SharedSchemaPath" + FileManager.sharedSchemaPath);
        try {
            const fileNames = await fs.readdir(FileManager.sharedSchemaPath);
            ctx.status = 200;
            ctx.response.body = JSON.stringify(fileNames);
        }
        catch (error) {
            ctx.status = 400;
            ctx.response.body = error;
        }
        finally {
            next();
        }
    }
    /**
     * GET /api/file/:table
     *
     */
    static async getFileByName(ctx, next) {
        try {
            const reqFileName = ctx.params.table + ".ts";
            console.log("getFileByName reqFileName: " + reqFileName);
            const fileContentBuffer = await fs.readFile(path.resolve(FileManager.sharedSchemaPath, reqFileName));
            const fileStr = fileContentBuffer.toString("utf8");
            ctx.status = 200;
            ctx.response.set("Content-Type", "application/javascript");
            ctx.response.body = fileStr;
        }
        catch (error) {
            ctx.status = 400;
            ctx.response.body = error;
        }
        finally {
            next();
        }
    }
}
exports.FileManager = FileManager;
FileManager.projectRoot = process.env.projectRoot || "";
FileManager.sharedSchemaPath = path.resolve(FileManager.projectRoot, "./shared/schemas");
