import Koa = require("koa");
import Router = require("koa-router");
import bodyParser = require("koa-bodyparser");

import { logger } from "./middleware/logger";
import { RecordAPI } from "./api/RecordAPI";
import { responseTime } from "./middleware/responsetime";
import { SchemaAPI } from "./api/SchemaAPI";
import { UIAPI } from "./api/UIAPI";

const app = new Koa();
const router = new Router();

// logger
app.use(logger)
	.use(responseTime)
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods());

/**
 * Record api will retreive or insert records into a table.
 * @RECORD
 */
router.get("/api/record/:table", async (ctx, next) => {
	await RecordAPI.get(ctx, next);
});
router.get("/api/record/:table/:id", async (ctx, next) => {
	await RecordAPI.get(ctx, next);
});
router.post("/api/record/:table", async (ctx, next) => {
	await RecordAPI.post(ctx, next);
});
router.put("/api/record/:table/:id", async (ctx, next) => {
	await RecordAPI.put(ctx, next);
});
router.delete("/api/record/:table/:id", async (ctx, next) => {
	await RecordAPI.delete(ctx, next);
});

/**
 * Schema api will retreive metadata about the table
 * @SCHEMA
 */
// Get table schema metadata
router.get("/api/schema/:table", async (ctx, next) => {
	await SchemaAPI.get(ctx, next);
});

// Create new table
router.post("/api/schema", async (ctx, next) => {
	await SchemaAPI.post(ctx, next);
});

// Modify table schema properties
router.put("/api/schema/:table/:id", async (ctx, next) => {
	await SchemaAPI.put(ctx, next);
});

// Drop a table
router.delete("/api/schema/:table/:id", async (ctx, next) => {
	await SchemaAPI.delete(ctx, next);
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
	await UIAPI.get(ctx, next);
});

// Get limited UI properties only for a specific category
// e.g. only Form fields, or only actions
router.get("/api/ui/:table/:property", async (ctx, next) => {
	await UIAPI.get(ctx, next);
});

// Create ui property for a given table
router.post("/api/ui/:table/:property", async (ctx, next) => {
	await UIAPI.post(ctx, next);
});
// Update a ui property for a given table
router.put("/api/ui/:table/:property", async (ctx, next) => {
	await UIAPI.put(ctx, next);
});
router.delete("/api/ui/:table/:property", async (ctx, next) => {
	await UIAPI.delete(ctx, next);
});

export = app;
