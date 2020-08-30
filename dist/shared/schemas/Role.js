"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const SystemFile_1 = require("./SystemFile");
const String_1 = require("../fields/String");
class Role extends SystemFile_1.SystemFile {
    constructor() {
        super();
        this.class = new String_1.StringField("s_role");
        this.name = new String_1.StringField("");
    }
}
exports.Role = Role;
