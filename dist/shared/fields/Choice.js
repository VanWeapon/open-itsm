"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceField = void 0;
const SystemField_1 = require("./SystemField");
class ChoiceField extends SystemField_1.Field {
    constructor(choices, defaultValue) {
        super();
        this.name = "choice";
        this.label = "Choice";
        this.length = 255;
        this.choices = [];
        this.choices = choices;
        this.value = defaultValue;
    }
    setValue(value) {
        if (this.choices.includes(value)) {
            super.setValue(value);
        }
        else {
            this.throwInvalidValueType("A valid choice", value);
        }
    }
}
exports.ChoiceField = ChoiceField;
