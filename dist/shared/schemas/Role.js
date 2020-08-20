"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const SystemFile_1 = require("./SystemFile");
const String_1 = require("../fields/String");
class Role extends SystemFile_1.SystemFile {
    constructor() {
        super();
        this.name = new String_1.StringField("");
        this.class.updateValue("s_role");
    }
}
exports.Role = Role;
