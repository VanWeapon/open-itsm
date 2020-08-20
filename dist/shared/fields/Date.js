"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateField = void 0;
const DateTime_1 = require("./DateTime");
class DateField extends DateTime_1.DateTimeField {
    constructor(value) {
        super(value);
        this.name = "date";
        this.label = "Date";
        this.length = 16;
        this.value = 0;
    }
    getDisplayValue() {
        const dateObj = new Date(this.value);
        return dateObj.toDateString();
    }
    getDisplayValueLocale() {
        const dateObj = new Date(this.value);
        return dateObj.toLocaleDateString();
    }
}
exports.DateField = DateField;
