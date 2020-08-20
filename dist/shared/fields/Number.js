"use strict";
// export type NumberField = {
// 	value: number;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberField = void 0;
const SystemField_1 = require("./SystemField");
class NumberField extends SystemField_1.Field {
    constructor(value) {
        super();
        this.name = "number";
        this.label = "Number";
        this.length = Number.MAX_SAFE_INTEGER;
        this.value = 0;
        if (this.validateValue(value))
            this.setValue(value);
        else
            this.throwInvalidValueType("number", typeof value);
    }
    validateValue(value) {
        if (typeof value !== "number") {
            return false;
        }
        else {
            return true;
        }
    }
    getValue() {
        return +super.getValue();
    }
}
exports.NumberField = NumberField;
