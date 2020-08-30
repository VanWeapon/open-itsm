"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
const Task_1 = require("./Task");
const String_1 = require("../fields/String");
const AutoNumber_1 = require("../fields/AutoNumber");
class Incident extends Task_1.Task {
    constructor() {
        super();
        this.class = new String_1.StringField("incident");
        this.prefix = "INC";
        this.digits = 7;
        this.impact = 4;
        this.urgency = 4;
        this.number = new AutoNumber_1.AutoNumberField({
            prefix: this.prefix,
            digits: this.digits,
        });
        this.changeHandlers.push(this.validateImpactAndUrgency);
    }
    validateImpactAndUrgency(fieldName, oldValue, newValue) {
        if (fieldName == "impact" || fieldName == "urgency") {
            if (![1, 2, 3, 4, 5].includes(newValue)) {
            }
        }
    }
}
exports.Incident = Incident;
