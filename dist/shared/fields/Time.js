"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeField = void 0;
const DateTime_1 = require("./DateTime");
class TimeField extends DateTime_1.DateTimeField {
    constructor(value) {
        super(value);
        this.name = "datetime";
        this.label = "Date/Time";
        this.length = 16;
        this.value = 0;
    }
    getDisplayValue() {
        const dateObj = new Date(this.value);
        return dateObj.toTimeString();
    }
    getDisplayValueLocale() {
        const dateObj = new Date(this.value);
        return dateObj.toLocaleTimeString();
    }
}
exports.TimeField = TimeField;
