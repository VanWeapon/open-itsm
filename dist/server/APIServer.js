"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
// const bodyParser = require("koa-bodyparser");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const logger_1 = require("./middleware/logger");
const RecordAPI_1 = require("./api/RecordAPI");
const responsetime_1 = require("./middleware/responsetime");
const pg_1 = require("pg");
const SchemaAPI_1 = require("./api/SchemaAPI");
const UIAPI_1 = require("./api/UIAPI");
async function startServer() {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    const client = new pg_1.Pool({ ssl: false });
    await client
        .connect()
        .then((result) => {
        console.log("Database connected");
    })
        .catch((reason) => {
        console.log("Big error");
        throw reason;
    });
    // logger
    app.use(logger_1.logger)
        .use(responsetime_1.responseTime)
        .use(koa_bodyparser_1.default())
        .use(router.routes())
        .use(router.allowedMethods());
    /**
     * Record api will retreive or insert records into a table.
     * @RECORD
     */
    router.get("/api/record/:table", async (ctx, next) => {
        await RecordAPI_1.RecordAPI.get(ctx, next, client);
    });
    router.post("/api/record/:table", async (ctx, next) => {
        await RecordAPI_1.RecordAPI.post(ctx, next, client);
    });
    router.put("/api/record/:table/:id", async (ctx, next) => {
        await RecordAPI_1.RecordAPI.put(ctx, next, client);
    });
    router.delete("/api/record/:table/:id", async (ctx, next) => {
        await RecordAPI_1.RecordAPI.delete(ctx, next, client);
    });
    /**
     * Schema api will retreive metadata about the table
     * @SCHEMA
     */
    //Get table schema metadata
    router.get("/api/schema/:table", async (ctx, next) => {
        await SchemaAPI_1.SchemaAPI.get(ctx, next, client);
    });
    //Create new table
    router.post("/api/schema", async (ctx, next) => {
        await SchemaAPI_1.SchemaAPI.post(ctx, next, client);
    });
    //Modify table schema properties
    router.put("/api/schema/:table/:id", async (ctx, next) => {
        await SchemaAPI_1.SchemaAPI.put(ctx, next, client);
    });
    //Drop a table
    router.delete("/api/schema/:table/:id", async (ctx, next) => {
        await SchemaAPI_1.SchemaAPI.delete(ctx, next, client);
    });
    /**
     * @UI
     * UI API
     * Used to retreive the UI Elements for a given table form/list/etc
     * E.g. query the UI api with /api/ui/incident
     * Return {
     *   form: [] //array of fields as object with types and positioning
     *   list: [] // array of fields as objects with types and order
     *   actions: []//array of buttons as object with location and so on
     * }
     */
    // Get UI properties for a given table
    router.get("/api/ui/:table", async (ctx, next) => {
        await UIAPI_1.UIAPI.get(ctx, next, client);
    });
    //Get limited UI properties only for a specific category
    // e.g. only Form fields, or only actions
    router.get("/api/ui/:table/:property", async (ctx, next) => {
        await UIAPI_1.UIAPI.get(ctx, next, client);
    });
    //Create ui property for a given table
    router.post("/api/ui/:table/:property", async (ctx, next) => {
        await UIAPI_1.UIAPI.post(ctx, next, client);
    });
    //Update a ui property for a given table
    router.put("/api/ui/:table/:property", async (ctx, next) => {
        await UIAPI_1.UIAPI.put(ctx, next, client);
    });
    router.delete("/api/ui/:table/:property", async (ctx, next) => {
        await UIAPI_1.UIAPI.delete(ctx, next, client);
    });
    app.listen(3000);
    console.log("Server Started");
}
exports.startServer = startServer;
