"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNumberField = void 0;
const String_1 = require("./String");
class AutoNumberField extends String_1.StringField {
    constructor({ prefix, digits }) {
        super("");
        this.prefix = "NUM";
        this.digits = 7;
        this.name = "autonumber";
        this.label = "Auto Number";
        this.length = 40;
        this.value = "NUM000000";
        this.prefix = prefix;
        this.digits = digits;
        this.setValue(this.getNextNumber());
    }
    getNextNumber() {
        let prefix = this.prefix;
        let digits = this.digits;
        //All this does is provide a completely random number, need to implement proper autonumbering system
        let numStr = "";
        var newNum = Math.floor(Math.random() * 10 * digits * 1000);
        for (var i = 0; i < digits; i++)
            numStr += "0";
        numStr = (numStr + newNum).slice(-digits);
        numStr = prefix + numStr;
        return numStr;
    }
}
exports.AutoNumberField = AutoNumberField;
