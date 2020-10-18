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
const app = require("./server/APIServer");
const typeorm_1 = require("typeorm");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting...");
    console.log("Creating db connection");
    const options = yield typeorm_1.getConnectionOptions(process.env.NODE_ENV);
    const c = yield typeorm_1.createConnection(Object.assign(Object.assign({}, options), { name: process.env.NODE_ENV }));
    console.log("Db connection created: " + c.isConnected + " " + c.name);
    console.log("Starting server...");
    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`Server listening on ${port}`);
});
start();
//# sourceMappingURL=index.js.map