"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const Table_1 = require("./Table");
const AutoNumber_1 = require("../fields/AutoNumber");
const String_1 = require("../fields/String");
class Task extends Table_1.Table {
    constructor() {
        super();
        this.digits = 7;
        this.prefix = "TASK";
        this.short_description = new String_1.StringField("");
        this.description = new String_1.StringField("");
        this.assignee = new String_1.StringField("");
        this.caller = new String_1.StringField("");
        this.location = new String_1.StringField("");
        this.class.updateValue("task");
        this.number = new AutoNumber_1.AutoNumberField({
            prefix: this.prefix,
            digits: this.digits,
        });
    }
}
exports.Task = Task;
