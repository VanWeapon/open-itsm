"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaAPI = void 0;
const child_process_1 = require("child_process");
const EntityGenerator_1 = require("./EntityGenerator");
class SchemaAPI {
    static get(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const tableName = ctx.params.table || null;
            if (!tableName) {
                ctx.status = 400;
                ctx.body = "No table name provided";
                yield next();
                return;
            }
            next();
        });
    }
    static post(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEntity = ctx.request.body;
            const validEntityJSON = EntityGenerator_1.EntityGenerator.validateJSON(newEntity);
            if (!validEntityJSON) {
                ctx.status = 400;
                ctx.body = "Invalid body";
                return;
            }
            const entityCreated = yield EntityGenerator_1.EntityGenerator.generateFromJSON(newEntity);
            if (!entityCreated) {
                ctx.status = 400;
                ctx.body = "Invalid body";
                return;
            }
            console.log(child_process_1.execSync("ts-node .\\node_modules\\typeorm\\cli.js -c development migration:run").toString("utf8"));
            console.log(child_process_1.execSync("ts-node .\\node_modules\\typeorm\\cli.js -c development migration:generate -n " +
                newEntity.label).toString("utf8"));
            console.log(child_process_1.execSync("ts-node .\\node_modules\\typeorm\\cli.js -c development migration:run").toString("utf8"));
            yield next();
        });
    }
    static put(_ctx, _next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    static delete(_ctx, _next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.SchemaAPI = SchemaAPI;
//# sourceMappingURL=SchemaAPI.js.map