"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanField = void 0;
const SystemField_1 = require("./SystemField");
class BooleanField extends SystemField_1.Field {
    constructor(value) {
        super();
        this.name = "boolean";
        this.label = "Boolean";
        this.length = 5;
        this.value = false;
        this.trySetValue(value);
    }
    validateValue(value) {
        return typeof value === "boolean";
    }
    getValue() {
        return !!super.getValue();
    }
    updateValue(value) {
        this.trySetValue(value);
    }
    trySetValue(value) {
        if (this.validateValue(value))
            this.setValue(value);
        else
            this.throwInvalidValueType("boolean", typeof value);
    }
    getDisplayValue() {
        if (this.value === true)
            return "True";
        else
            return "False";
    }
}
exports.BooleanField = BooleanField;
