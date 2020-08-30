"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const SystemFile_1 = require("./SystemFile");
const String_1 = require("../fields/String");
class Table extends SystemFile_1.SystemFile {
    constructor() {
        super();
        this.class = new String_1.StringField("s_dbo");
    }
    getValue(field) {
        try {
            const internalField = this[field];
            const value = internalField.getValue();
            return value;
        }
        catch (error) {
            return error;
        }
    }
    getDisplayValue(field) {
        try {
            const internalField = this[field];
            const value = internalField.getDisplayValue();
            return value;
        }
        catch (error) {
            return error;
        }
    }
    getReferencedRecord(field) { }
    getTableObject(tableName) { }
}
exports.Table = Table;
