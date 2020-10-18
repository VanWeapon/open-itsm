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
exports.RecordAPI = void 0;
const typeorm_1 = require("typeorm");
class RecordAPI {
    static get(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = typeorm_1.getConnection(process.env.NODE_ENV);
            const tableName = ctx.params.table;
            const id = ctx.params.id || null;
            let repository;
            try {
                repository = connection.getRepository(tableName);
            }
            catch (e) {
                ctx.status = 404;
                ctx.body = `Table name: ${tableName} does not exist`;
                yield next();
                return;
            }
            const entityName = repository.metadata.name;
            if (id) {
                try {
                    const record = yield RecordAPI.getByID(id, repository);
                    if (record) {
                        ctx.status = 200;
                        ctx.body = record;
                        yield next();
                        return;
                    }
                    else {
                        ctx.status = 404;
                        ctx.body = "No " + entityName + " found with ID of " + id;
                        yield next();
                        return;
                    }
                }
                catch (e) {
                    ctx.status = 400;
                    ctx.body = e.message;
                    yield next();
                    return;
                }
            }
            else {
                const records = yield repository.find();
                if (records) {
                    ctx.status = 200;
                    ctx.body = records;
                    yield next();
                    return;
                }
                else {
                    ctx.status = 404;
                    ctx.body = `No records found for table ${tableName}`;
                    yield next();
                    return;
                }
            }
            yield next();
        });
    }
    static getByID(id, repo) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = yield repo.findOne(id);
            if (record) {
                return record;
            }
            else {
                return null;
            }
        });
    }
    static post(_ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield next();
        });
    }
    static put(_ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield next();
        });
    }
    static delete(_ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield next();
        });
    }
}
exports.RecordAPI = RecordAPI;
//# sourceMappingURL=RecordAPI.js.map