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
exports.AccessControl = void 0;
const typeorm_1 = require("typeorm");
const Record_1 = require("./Record");
const Table_1 = require("./Table");
const Dictionary_1 = require("./Dictionary");
const Role_1 = require("./Role");
let AccessControl = class AccessControl extends Record_1.Record {
    setClassName() {
        this.class_name = "s_acl";
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccessControl.prototype, "setClassName", null);
__decorate([
    typeorm_1.Column("boolean", { default: true }),
    __metadata("design:type", Boolean)
], AccessControl.prototype, "active", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Table_1.Table, (t) => t.s_acl_table, { eager: true }),
    __metadata("design:type", Table_1.Table)
], AccessControl.prototype, "table", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Dictionary_1.Dictionary, (f) => f.s_acl_field, {
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", Dictionary_1.Dictionary)
], AccessControl.prototype, "field", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Role_1.Role, (roles) => roles.s_acl_requires_role, {
        nullable: false,
    }),
    __metadata("design:type", Array)
], AccessControl.prototype, "requires_role", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], AccessControl.prototype, "type", void 0);
AccessControl = __decorate([
    typeorm_1.Entity("s_acl")
], AccessControl);
exports.AccessControl = AccessControl;
//# sourceMappingURL=AccessControl.js.map