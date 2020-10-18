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
exports.UIAPI = void 0;
const typeorm_1 = require("typeorm");
const Dictionary_1 = require("../../database/entity/system/Dictionary");
const Table_1 = require("../../database/entity/system/Table");
const UIAction_1 = require("../../database/entity/system/UIAction");
class UIAPI {
    static get(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = ctx.params.table;
            const property = ctx.params.property;
            const connection = typeorm_1.getConnection(process.env.NODE_ENV);
            if (!table && !property) {
                ctx.response.status = 400;
                ctx.response.body = "Table and Property not provided in request";
                yield next();
                return;
            }
            if (table && !property) {
                ctx.response.body = yield UIAPI.getAllProperties(table, connection);
                ctx.response.status = 200;
                yield next();
                return;
            }
            if (table && property) {
                const result = yield UIAPI.getAllProperties(table, connection);
                switch (property) {
                    case "form":
                        ctx.response.body = result.form;
                        ctx.response.status = 200;
                        break;
                    case "list":
                        ctx.response.body = result.list;
                        ctx.response.status = 200;
                        break;
                    case "actions":
                        ctx.response.body = result.actions;
                        ctx.response.status = 200;
                        break;
                    default:
                        ctx.response.status = 400;
                        ctx.response.body =
                            "Invalid property name provided, valid options are 'form', 'list', 'actions'";
                }
                yield next();
                return;
            }
        });
    }
    static post(_ctx, _next) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = typeorm_1.getConnection(process.env.NODE_ENV);
            connection.getRepository(Table_1.Table);
        });
    }
    static put(_ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = typeorm_1.getConnection(process.env.NODE_ENV);
            connection.getRepository(Table_1.Table);
            yield next();
        });
    }
    static delete(_ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = typeorm_1.getConnection(process.env.NODE_ENV);
            connection.getRepository(Table_1.Table);
            yield next();
        });
    }
    static getAllProperties(tableName, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            const tableEntity = yield connection
                .getRepository(Table_1.Table)
                .findOne({ name: tableName });
            const fieldArray = connection
                .getRepository(Dictionary_1.Dictionary)
                .find({ where: { table: tableEntity } });
            const listArray = fieldArray;
            const actionArray = connection
                .getRepository(UIAction_1.UIAction)
                .createQueryBuilder("action")
                .where("action.table = :table", { table: tableEntity.guid })
                .orWhere("global = true")
                .getMany();
            const result = {
                form: yield fieldArray,
                list: yield listArray,
                actions: yield actionArray,
            };
            return result;
        });
    }
}
exports.UIAPI = UIAPI;
//# sourceMappingURL=UIAPI.js.map