"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeField = void 0;
const Number_1 = require("./Number");
class DateTimeField extends Number_1.NumberField {
    constructor(value) {
        super(value);
        this.name = "datetime";
        this.label = "Date/Time";
        this.length = 16;
        this.value = 0;
        this.trySetValue(value);
    }
    updateValue(value) {
        this.trySetValue(value);
    }
    validateValue(value) {
        var temp = new Date(value);
        var dateEpoch = temp.getTime();
        if (dateEpoch === value)
            return true;
        else
            return false;
    }
    trySetValue(value) {
        if (this.validateValue(value)) {
            this.setValue(value);
        }
        else {
            this.throwInvalidValueType("Epoch time since Jan 1 1970", `${typeof value} (${value})`);
        }
    }
    getDisplayValue() {
        const dateObj = new Date(this.value);
        return dateObj.toString();
    }
    getDisplayValueISO() {
        const dateObj = new Date(this.value);
        return dateObj.toISOString();
    }
    getDisplayValueUTC() {
        const dateObj = new Date(this.value);
        return dateObj.toUTCString();
    }
    getDisplayValueLocale() {
        const dateObj = new Date(this.value);
        return dateObj.toLocaleString();
    }
}
exports.DateTimeField = DateTimeField;
