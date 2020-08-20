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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const nedb_1 = __importDefault(require("nedb"));
const path = __importStar(require("path"));
const util = __importStar(require("util"));
const FileManager_1 = require("../../server/api/FileManager");
class DB {
    constructor(config) {
        this.connectionString = "";
        this.dbFileName = "";
        this.dbPath = path.resolve(FileManager_1.FileManager.projectRoot, "/database/data");
        this.dbFullPath = "";
        if (!config) {
            return;
        }
        if (config.dbPath)
            this.dbPath = config.dbPath;
        if (config.dbFileName)
            this.dbFileName = config.dbFileName;
        if (config.connectionString)
            this.connectionString = config.connectionString;
        if (config.file) {
            this.file = config.file;
            if (!this.dbFullPath)
                this.dbFullPath = this.getFilePathFromClass();
            this.db = new nedb_1.default(this.dbFullPath);
            this.db.loadDatabase();
        }
        else if (config.dbFileName) {
            this.initialise(config.dbFileName);
        }
        console.debug("DB Initialised from file: " + this.dbFullPath);
    }
    insert(file) {
        if (!this.db)
            throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
        console.log("Inserting file: ");
        if (!file) {
            console.log(util.inspect(this.file));
            this.db.insert(this.file);
        }
        else {
            console.log(util.inspect(file));
            this.db.insert(file);
        }
    }
    initialise(className) {
        this.dbFullPath = this.getFilePathFromClass(className);
        this.db = new nedb_1.default(this.dbFullPath);
        this.db.loadDatabase();
        console.debug("DB Initialised from file: " + this.dbFullPath);
    }
    async loadRecord(fieldName, fieldValue) {
        var query = {};
        query[fieldName] = fieldValue;
        return new Promise((resolve, reject) => {
            if (!this.db) {
                throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
            }
            this.db.findOne(query, (err, document) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(document);
                }
            });
        });
    }
    async loadAll() {
        return new Promise((resolve, reject) => {
            try {
                if (!this.db) {
                    throw "You need to initialise the database first. Use DB.initialise(className) to load the data store";
                }
                this.db.find({}, (err, docs) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(docs);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    update() { }
    getFilePathFromClass(className) {
        let fileName;
        if (!className && !this.file) {
            throw "DB connector is not initialised with a file, you need to pass a className parameter to this method";
        }
        if (!className && this.file) {
            fileName = this.file.getClassName() + ".db";
        }
        else {
            fileName = className + ".db";
        }
        let dataLocation = path.resolve(this.dbPath);
        let dataFile = path.join(dataLocation, fileName);
        return dataFile;
    }
}
exports.DB = DB;
