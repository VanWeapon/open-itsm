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
var Role_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const Record_1 = require("./Record");
const typeorm_1 = require("typeorm");
const AccessControl_1 = require("./AccessControl");
let Role = Role_1 = class Role extends Record_1.Record {
    setClassName() {
        this.class_name = "s_role";
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Role.prototype, "setClassName", null);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Role_1, (r) => r.includes_roles),
    __metadata("design:type", Array)
], Role.prototype, "includes_roles", void 0);
__decorate([
    typeorm_1.ManyToMany(() => AccessControl_1.AccessControl, (acl) => acl.requires_role),
    __metadata("design:type", Array)
], Role.prototype, "s_acl_requires_role", void 0);
Role = Role_1 = __decorate([
    typeorm_1.Entity("s_role")
], Role);
exports.Role = Role;
//# sourceMappingURL=Role.js.map