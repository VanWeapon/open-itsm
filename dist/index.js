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
require("reflect-metadata");
require("dotenv").config();
const APIServer_1 = require("./server/APIServer");
const typeorm_1 = require("typeorm");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const options = yield typeorm_1.getConnectionOptions(process.env.NODE_ENV);
    const connection = yield typeorm_1.createConnection(Object.assign(Object.assign({}, options), { name: "default" }));
    APIServer_1.startServer(connection);
});
start();
//# sourceMappingURL=index.js.map