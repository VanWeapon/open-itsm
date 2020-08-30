"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIAPI = void 0;
const DB_1 = require("../../database/engine/DB");
class UIAPI {
    static async get(ctx, next, client) {
        const engine = new DB_1.DB(client);
        engine.initialise("test");
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
exports.UIAPI = UIAPI;
