"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemFile = void 0;
const path = __importStar(require("path"));
const String_1 = require("../fields/String");
const Date_1 = require("../fields/Date");
const GUID_1 = require("../fields/GUID");
/**
 * @name SystemFile
 * @description the base class for all record type definitions
 * @property {class}: Must be defined on every new class that extends SystemFile
 */
class SystemFile extends Object {
    constructor() {
        super();
        this.changeHandlers = [];
        Object.setPrototypeOf(this, new.target.prototype);
        let init = this.getEvent();
        this.class = new String_1.StringField("s_file");
        this.created = new Date_1.DateField(init.time);
        this.updated = new Date_1.DateField(init.time);
        // this.created_by = new FileReferenceField(init.user, "s_user");
        // this.updated_by = new FileReferenceField(init.user, "s_user");
        this.created_by = new GUID_1.GUIDField(); //can use this.created_by.updateValue() to set a new GUID
        this.updated_by = new GUID_1.GUIDField();
        this.guid = new GUID_1.GUIDField();
    }
    handlePropertyChange(fieldName, oldValue, newValue) {
        console.log("handlePropertyChange: ", fieldName, oldValue, newValue);
        if (this.changeHandlers.length > 0) {
            this.changeHandlers.forEach((handler) => {
                handler.call(this, fieldName, oldValue, newValue);
            });
        }
    }
    getValue(propertyName) {
        if (!this.hasOwnProperty(propertyName)) {
            return "";
        }
        else {
            return this[propertyName].toString();
        }
    }
    setValue(propertyName, value, display) {
        console.log("setValue: ", propertyName, value, display);
        if (!this.hasOwnProperty(propertyName)) {
            throw `${this.class} does not have the field ${propertyName}`;
        }
        else {
            try {
                const oldValue = this[propertyName];
                this.handlePropertyChange(propertyName, oldValue.value, value);
                this[propertyName].value = value;
                if (display)
                    this[propertyName].display = display;
                return true;
            }
            catch {
                throw `${this.class} ${propertyName} is not assignable to the type ${typeof value}`;
            }
        }
    }
    /**
     * This should be related to the API event which triggered the initialisation of a new record
     */
    getEvent() {
        return {
            user: "12345",
            time: Date.now(),
        };
    }
    getFileName() {
        let fileName = this.class + ".db";
        let dataLocation = path.resolve("./database/data/");
        let dataFile = path.join(dataLocation, fileName);
        return dataFile;
    }
    getClassName() {
        return this.class;
    }
}
exports.SystemFile = SystemFile;
