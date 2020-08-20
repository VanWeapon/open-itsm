"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReferenceField = void 0;
const GUID_1 = require("./GUID");
const DB_1 = require("../../database/engine/DB");
/**
 * @name FileReferenceField - a field type for storing a link to another File, using GUID as the primary link
 * @extends GUIDField
 * @property {string} name - internal name for the field type
 * @property {string} label - public display name for the field type
 * @property {string} referenceClass - the internal class name of the type of linked field, e.g. "incident"
 * @property {string} value - a GUID string matching a v4 UUID
 * @method validateValue(string) - will validate a given string matches a real record before setting the field's value
 *
 */
class FileReferenceField extends GUID_1.GUIDField {
    constructor(value, referenceClass) {
        super(value);
        this.name = "file_reference";
        this.label = "File Reference";
        this.value = "";
        this.referenceClass = referenceClass;
        if (this.validateValue(value))
            this.setValue(value);
        else
            this.throwInvalidValueType("GUID of a valid record on table " + referenceClass, typeof value);
    }
    validateValue(value) {
        let validated = false;
        const db = new DB_1.DB();
        db.initialise(this.referenceClass);
        db.loadRecord("guid", value)
            .then((value) => {
            if (value)
                validated = true;
        })
            .catch((error) => {
            console.log(error);
            validated = false;
        });
        return validated;
    }
}
exports.FileReferenceField = FileReferenceField;
