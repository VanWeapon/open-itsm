"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
class Field extends Object {
    constructor() {
        super();
        this.class = "s_field";
        Object.setPrototypeOf(this, new.target.prototype);
    }
    setValue(value) {
        this.value = value;
    }
    calculateValue() {
        if (this.calculated && this.calulationScript) {
            this.calulationScript.call(this);
        }
    }
    trySetValue(value) {
        if (this.validateValue(value))
            this.setValue(value);
    }
    getValue() {
        return this.value;
    }
    updateValue(value) {
        this.trySetValue(value);
    }
    getDisplayValue() {
        return this.value;
    }
    validateLength(value) {
        value = value.toString();
        if (this.length == Number.MAX_SAFE_INTEGER || this.length == 0) {
            return true;
        }
        else if (value.length < this.length) {
            return true;
        }
        else {
            this.throwInvalidLength(this.length, value.length || value.toString().length);
        }
    }
    validateValue(value) {
        if (this.validateLength(value))
            return true;
        else
            return false;
    }
    throwInvalidValueType(expected, actual) {
        throw new Error(`Invalid type passed, ${this.label} expects ${expected}, but received ${actual}`);
    }
    thowInvalidSuperCall(expected, actual) {
        throw new Error(`Invalid base type passed, ${this.label} expects ${expected}, but received ${actual}`);
    }
    throwInvalidLength(expected, actual) {
        throw new Error(`Invalid value length, maximum length is ${expected}, provided value length is ${actual}`);
    }
}
exports.Field = Field;
