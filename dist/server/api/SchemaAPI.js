"use strict";
/**
 * SchemaAPI will get data definitions of the database tables
 * E.g.
 * /api/schema/incident
 * Will return all the field names, field types, of the incident table
 * WIll return properties of the table, such as mandatory fields, primary/foreign keys etc
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaAPI = void 0;
const DB_1 = require("../../database/engine/DB");
class SchemaAPI {
    static async get(ctx, next, client) {
        const tableName = ctx.params.table;
        console.log(ctx.params);
        const engine = new DB_1.DB(client);
        let validTable = await engine.initialise(tableName);
        if (!validTable) {
            ctx.response.status = 404;
            ctx.response.body = `Table with name ${tableName} does not exist`;
            await next();
            return;
        }
        const schema = await engine.getSchemaData();
        ctx.response.status = 200;
        ctx.response.body = schema;
        await next();
    }
    static async post(ctx, next, client) {
        const engine = new DB_1.DB(client);
        engine.initialise("test");
    }
    static async put(ctx, next, client) {
        const engine = new DB_1.DB(client);
        engine.initialise("test");
    }
    static async delete(ctx, next, client) {
        const engine = new DB_1.DB(client);
        engine.initialise("test");
    }
}
exports.SchemaAPI = SchemaAPI;
