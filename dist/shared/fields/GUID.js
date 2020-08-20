"use strict";
// export type GUIDField = {
// 	value: string;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUIDField = void 0;
const String_1 = require("./String");
const uuid_1 = require("uuid");
/**
 * @name GUIDField - a field type for storing a GUID value
 * @property {string} name - the internal field name for this type
 * @property {string} display - the display name for this field type, for use in UIs
 */
class GUIDField extends String_1.StringField {
    constructor(value) {
        super();
        this.name = "guid";
        this.label = "GUID";
        this.length = 36;
        this.value = "";
        if (value)
            this.trySetValue(value);
        else
            this.trySetValue(GUIDField.generateGUID());
    }
    trySetValue(value) {
        if (this.validateValue(value))
            this.setValue(value);
        else
            this.throwInvalidValueType("v4 guid", typeof value);
    }
    validateValue(value) {
        //04443ab1-2859-418f-ac10-cecc28ba0711
        const V4Regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
        return V4Regex.test(value);
    }
    static generateGUID() {
        return uuid_1.v4();
    }
}
exports.GUIDField = GUIDField;
