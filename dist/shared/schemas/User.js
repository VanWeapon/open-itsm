"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Table_1 = require("./Table");
const String_1 = require("../fields/String");
class User extends Table_1.Table {
    constructor() {
        super();
        this.first_name = new String_1.StringField("");
        this.last_name = new String_1.StringField("");
        this.name = new String_1.StringField("");
        this.roles = [];
        this.class.updateValue("s_user");
        this.changeHandlers.push(this.handleNameChange);
    }
    handleNameChange(fieldName, oldValue, newValue) {
        console.log("running handleNameChange: ", fieldName, oldValue, newValue);
        if (fieldName == "first_name") {
            this.setValue("name", newValue + " " + this.last_name.getValue());
            return true;
        }
        else if (fieldName == "last_name") {
            this.setValue("name", this.first_name.getValue() + " " + newValue);
            return true;
        }
        else {
            return true;
        }
    }
    /**
     * Includes resetting calculated values
     */
    setValue(fieldName, fieldValue) {
        super.setValue(fieldName, fieldValue);
        if (fieldName == "first_name" || fieldName == "last_name") {
        }
        return true;
    }
}
exports.User = User;
