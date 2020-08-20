"use strict";
// export type StringField = {
// 	value: string;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringField = void 0;
const SystemField_1 = require("./SystemField");
class StringField extends SystemField_1.Field {
    constructor(value) {
        super();
        this.name = "string";
        this.label = "String";
        this.length = Number.MAX_SAFE_INTEGER;
        this.value = "";
        if (value)
            this.trySetValue(value);
    }
    validateValue(value) {
        if (typeof value !== "string") {
            return false;
        }
        else {
            return true;
        }
    }
    getValue() {
        return super.getValue().toString();
    }
    trySetValue(value) {
        if (this.validateValue(value)) {
            this.setValue(value);
        }
        else {
            this.throwInvalidValueType("string", typeof value);
        }
    }
}
exports.StringField = StringField;
