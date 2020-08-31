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
const TableSchema_1 = require("../../shared/TableSchema");
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
        console.log(ctx.request.body);
        const body = ctx.request.body;
        const engine = new DB_1.DB(client);
        console.log("validating schema");
        let result = await SchemaAPI.validateSchemaBody(body, engine);
        let cleanBody;
        if (!result.ok) {
            ctx.response.status = 400;
            ctx.response.body = result.message;
            await next();
            return;
        }
        console.log("Validation result ok: " + result.ok);
        cleanBody = result.value;
        let tableExists = await engine.testTableExists(cleanBody.name);
        if (tableExists) {
            ctx.response.status = 400;
            ctx.response.body = `Table with name ${body.name} already exists, duplicate entry aborted`;
            await next();
            return;
        }
        let tableCreated = await engine.createTable(body);
        if (tableCreated) {
            ctx.response.status = 201;
            ctx.response.body = `${cleanBody.name} table created successfully`;
            await next();
            return;
        }
    }
    static async validateSchemaBody(body, engine) {
        if (!body.name) {
            return {
                ok: false,
                message: "Name not present",
            };
        }
        if (!body.label) {
            return {
                ok: false,
                message: "Label not present",
            };
        }
        if (body.extends && typeof body.extends != "string") {
            return {
                ok: false,
                message: `Invalid extends value: ${body.extends}`,
            };
        }
        if (body.extends) {
            let extendsExists = await engine.testTableExists(body.extends);
            if (!extendsExists) {
                return {
                    ok: false,
                    message: `Invalid table name for extends ${body.extends}`,
                };
            }
        }
        let cleanFields = [];
        if (body.fields) {
            let anyFailed = false;
            let failureMessages = [];
            for (const field of body.fields) {
                let validationResult = await SchemaAPI.validateSchemaField(field, engine);
                if (validationResult.ok === false) {
                    anyFailed = true;
                    failureMessages.push(validationResult.message);
                }
                else {
                    cleanFields.push(validationResult.value);
                }
            }
            if (anyFailed) {
                return {
                    ok: false,
                    message: "Fields did not match validation rules: " +
                        failureMessages.join("\n"),
                };
            }
        }
        return {
            ok: true,
            value: {
                name: body.name,
                label: body.label,
                fields: cleanFields,
                extends: body.extends,
                number: body.number,
            },
        };
    }
    static async validateSchemaField(field, engine) {
        if (!field.name || !field.type || !field.label) {
            return {
                ok: false,
                message: `Invalid field defintion: ${JSON.stringify(field)}`,
            };
        }
        if (field.type == TableSchema_1.FieldType.REFERENCE && !field.reference) {
            return {
                ok: false,
                message: `Reference fields must have a referenced table name provided for ${field.name}`,
            };
        }
        if (field.type == TableSchema_1.FieldType.REFERENCE && field.reference) {
            let referenceTableExists = await engine.testTableExists(field.reference);
            if (!referenceTableExists) {
                return {
                    ok: false,
                    message: `Referenced table ${field.reference} is not a valid table`,
                };
            }
        }
        // Remove unwanted fields from the parsed object, could be bad juju
        let cleanField = {
            name: field.name,
            type: field.type,
            label: field.label,
            reference: field.reference || undefined,
        };
        return {
            ok: true,
            value: cleanField,
        };
    }
    static async put(ctx, next, client) {
        const body = ctx.request.body;
        const engine = new DB_1.DB(client);
        let valid = await SchemaAPI.validateSchemaBody(body, engine);
        let cleanBody;
        if (!valid.ok) {
            ctx.response.status = 400;
            ctx.response.body = valid.message;
            await next();
            return;
        }
        cleanBody = valid.value;
        const tableName = cleanBody.name;
    }
    static async delete(ctx, next, client) { }
}
exports.SchemaAPI = SchemaAPI;
