"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const typeorm_1 = require("typeorm");
const Record_1 = require("./Record");
const Dictionary_1 = require("./Dictionary");
const FieldLabel_1 = require("./FieldLabel");
const AccessControl_1 = require("./AccessControl");
let Table = class Table extends Record_1.Record {
    setClassName() {
        this.class_name = "s_dbo";
    }
    createDefaultDictionaries() {
        const guid = new Dictionary_1.Dictionary();
        guid.active = true;
        guid.column_name = "guid";
        guid.column_label = "GUID";
        guid.internal_type = "uuid";
        guid.max_length = 36;
        guid.table_name = this;
        guid.created_by = this.created_by;
        guid.updated_by = this.updated_by;
        guid.save();
        const created_by = new Dictionary_1.Dictionary();
        created_by.active = true;
        created_by.column_name = "created_by";
        created_by.column_label = "Created By";
        created_by.internal_type = "varchar";
        created_by.max_length = 80;
        created_by.table_name = this;
        created_by.created_by = this.created_by;
        created_by.updated_by = this.updated_by;
        created_by.save();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Table.prototype, "setClassName", null);
__decorate([
    typeorm_1.Column("varchar", { length: 80 }),
    __metadata("design:type", String)
], Table.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 80 }),
    __metadata("design:type", String)
], Table.prototype, "label", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 80 }),
    __metadata("design:type", String)
], Table.prototype, "extends", void 0);
__decorate([
    typeorm_1.Column("boolean"),
    __metadata("design:type", Boolean)
], Table.prototype, "autonumber", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Table.prototype, "number_prefix", void 0);
__decorate([
    typeorm_1.Column("integer"),
    __metadata("design:type", Number)
], Table.prototype, "number_digits", void 0);
__decorate([
    typeorm_1.OneToMany(() => Dictionary_1.Dictionary, (dictionary) => dictionary.table_name),
    __metadata("design:type", Array)
], Table.prototype, "dictionary_entries", void 0);
__decorate([
    typeorm_1.OneToMany(() => Dictionary_1.Dictionary, (dictionary) => dictionary.reference_table),
    __metadata("design:type", Object)
], Table.prototype, "s_dictionary_reference_table", void 0);
__decorate([
    typeorm_1.OneToMany(() => FieldLabel_1.FieldLabel, (l) => l.table),
    __metadata("design:type", Array)
], Table.prototype, "s_field_label_element_tables", void 0);
__decorate([
    typeorm_1.OneToMany(() => AccessControl_1.AccessControl, (acl) => acl.table),
    __metadata("design:type", Array)
], Table.prototype, "s_acl_table", void 0);
__decorate([
    typeorm_1.AfterInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Table.prototype, "createDefaultDictionaries", null);
Table = __decorate([
    typeorm_1.Entity("s_dbo")
], Table);
exports.Table = Table;
//# sourceMappingURL=Table.js.map