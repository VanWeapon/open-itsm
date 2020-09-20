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
exports.Dictionary = void 0;
const Record_1 = require("./Record");
const typeorm_1 = require("typeorm");
const Table_1 = require("./Table");
const FieldClass_1 = require("./FieldClass");
const FieldLabel_1 = require("./FieldLabel");
const AccessControl_1 = require("./AccessControl");
let Dictionary = class Dictionary extends Record_1.Record {
    setClassName() {
        this.class_name = "s_dictionary";
    }
    createDefaultLabel() {
        const label = new FieldLabel_1.FieldLabel();
        label.element = this;
        label.label = this.column_label;
        label.table = this.table_name;
        label.save();
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dictionary.prototype, "setClassName", null);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "active", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "primary", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "read_only", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "mandatory", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "display", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 80 }),
    __metadata("design:type", String)
], Dictionary.prototype, "column_name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 80 }),
    __metadata("design:type", String)
], Dictionary.prototype, "column_label", void 0);
__decorate([
    typeorm_1.ManyToOne(() => FieldClass_1.FieldClass, (f) => f.s_dictionary_internal_types, {
        nullable: false,
        eager: true,
    }),
    __metadata("design:type", Object)
], Dictionary.prototype, "internal_type", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Table_1.Table, (t) => t.dictionary_entries, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", Table_1.Table)
], Dictionary.prototype, "table_name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Table_1.Table, (t) => t.s_dictionary_reference_table, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", String)
], Dictionary.prototype, "reference_table", void 0);
__decorate([
    typeorm_1.Column("integer"),
    __metadata("design:type", Number)
], Dictionary.prototype, "max_length", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Dictionary.prototype, "default_value", void 0);
__decorate([
    typeorm_1.OneToMany(() => FieldLabel_1.FieldLabel, (l) => l.element),
    __metadata("design:type", Array)
], Dictionary.prototype, "s_field_label_elements", void 0);
__decorate([
    typeorm_1.OneToMany(() => AccessControl_1.AccessControl, (acl) => acl.field, { nullable: true }),
    __metadata("design:type", Array)
], Dictionary.prototype, "s_acl_field", void 0);
__decorate([
    typeorm_1.AfterInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dictionary.prototype, "createDefaultLabel", null);
Dictionary = __decorate([
    typeorm_1.Entity("s_dictionary")
], Dictionary);
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map