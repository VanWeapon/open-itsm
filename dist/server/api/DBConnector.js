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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnector = void 0;
const DB_1 = require("../../database/engine/DB");
const SystemFile_1 = require("../../shared/schemas/SystemFile");
const Incident_1 = require("../../shared/schemas/Incident");
const Task_1 = require("../../shared/schemas/Task");
const Table_1 = require("../../shared/schemas/Table");
const User_1 = require("../../shared/schemas/User");
const Role_1 = require("../../shared/schemas/Role");
const util = __importStar(require("util"));
class DBConnector {
    static async get(ctx, next) {
        const tableName = ctx.params.table;
        console.log("Received get request for " + tableName);
        console.log("Loading DB engine");
        const engine = DBConnector.initDatabaseByName(tableName);
        try {
            console.log("Trying to load all data");
            let docs = await engine.loadAll();
            ctx.response.body = JSON.stringify(docs);
        }
        catch (e) {
            console.error(e);
            ctx.response.status = 400;
            ctx.response.body = e;
        }
        finally {
            next();
        }
    }
    static async post(ctx, next) {
        const tableName = ctx.params.table;
        const engine = DBConnector.initDatabaseByName(tableName);
        try {
            console.log("Trying to insert record to Database");
            let newFile = DBConnector.classFactory(tableName);
            if (newFile === null)
                throw "No file found for the provided name: " + tableName;
            console.log("Factory produced a new File: " + util.inspect(newFile));
            let fields = ctx.request.body;
            console.log("Received fields: " + JSON.stringify(fields, null, 2));
            for (var field in fields) {
                console.log(`Attempting to set ${field} to value ${fields[field]}`);
                newFile.setValue(field, fields[field]);
            }
            console.log("Inserting new file: " + util.inspect(newFile));
            engine.insert(newFile);
            ctx.response.status = 201;
            ctx.response.body = `New ${newFile.getClassName()} ${newFile.getValue("guid")} successfully inserted`;
        }
        catch (e) {
            console.error(e);
            ctx.response.body = e;
            ctx.response.status = 400;
        }
        finally {
            next();
        }
    }
    static async put(ctx, next) {
        return "method not implemented";
    }
    static async delete(ctx, next) {
        return "method not implemented";
    }
    static initDatabaseByName(table) {
        //static implementation for POC only
        const engine = new DB_1.DB();
        engine.initialise(table);
        return engine;
    }
    static classFactory(className) {
        //In order to dynamically generate Classes we must map them first by name
        const map = {
            incident: Incident_1.Incident,
            task: Task_1.Task,
            s_user: User_1.User,
            s_file: SystemFile_1.SystemFile,
            s_role: Role_1.Role,
            s_dbo: Table_1.Table,
        };
        let cls = map[className] || null;
        if (!cls)
            return null;
        return new cls();
    }
}
exports.DBConnector = DBConnector;
