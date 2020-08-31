import Koa from "koa";
import Router from "koa-router";
// const bodyParser = require("koa-bodyparser");
import bodyParser from "koa-bodyparser";

import { logger } from "./middleware/logger";
import { RecordAPI } from "./api/RecordAPI";
import { responseTime } from "./middleware/responsetime";
import { Client, Pool } from "pg";
import { SchemaAPI } from "./api/SchemaAPI";
import { UIAPI } from "./api/UIAPI";

export async function startServer() {
	const app = new Koa();
	const router = new Router();
	const client = new Pool({ ssl: false });
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
		await RecordAPI.get(ctx, next, client);
	});
	router.post("/api/record/:table", async (ctx, next) => {
		await RecordAPI.post(ctx, next, client);
	});
	router.put("/api/record/:table/:id", async (ctx, next) => {
		await RecordAPI.put(ctx, next, client);
	});
	router.delete("/api/record/:table/:id", async (ctx, next) => {
		await RecordAPI.delete(ctx, next, client);
	});

	/**
	 * Schema api will retreive metadata about the table
	 * @SCHEMA
	 */
	//Get table schema metadata
	router.get("/api/schema/:table", async (ctx, next) => {
		await SchemaAPI.get(ctx, next, client);
	});

	//Create new table
	router.post("/api/schema", async (ctx, next) => {
		await SchemaAPI.post(ctx, next, client);
	});

	//Modify table schema properties
	router.put("/api/schema/:table/:id", async (ctx, next) => {
		await SchemaAPI.put(ctx, next, client);
	});

	//Drop a table
	router.delete("/api/schema/:table/:id", async (ctx, next) => {
		await SchemaAPI.delete(ctx, next, client);
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
		await UIAPI.get(ctx, next, client);
	});

	//Get limited UI properties only for a specific category
	// e.g. only Form fields, or only actions
	router.get("/api/ui/:table/:property", async (ctx, next) => {
		await UIAPI.get(ctx, next, client);
	});

	//Create ui property for a given table
	router.post("/api/ui/:table/:property", async (ctx, next) => {
		await UIAPI.post(ctx, next, client);
	});
	//Update a ui property for a given table
	router.put("/api/ui/:table/:property", async (ctx, next) => {
		await UIAPI.put(ctx, next, client);
	});
	router.delete("/api/ui/:table/:property", async (ctx, next) => {
		await UIAPI.delete(ctx, next, client);
	});

	app.listen(3000);
	console.log("Server Started");
}
