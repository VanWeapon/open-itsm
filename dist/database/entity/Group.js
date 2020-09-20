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
exports.Group = void 0;
const typeorm_1 = require("typeorm");
const Record_1 = require("./Record");
const Role_1 = require("./Role");
const User_1 = require("./User");
let Group = class Group extends Record_1.Record {
    setClassName() {
        this.class_name = "s_group";
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Group.prototype, "setClassName", null);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], Group.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (manager) => manager.s_group_managers),
    __metadata("design:type", User_1.User)
], Group.prototype, "manager", void 0);
__decorate([
    typeorm_1.ManyToMany(() => User_1.User),
    typeorm_1.JoinTable({ name: "s_group_membership" }),
    __metadata("design:type", Array)
], Group.prototype, "group_members", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Role_1.Role),
    typeorm_1.JoinTable({ name: "s_group_contains_role" }),
    __metadata("design:type", Array)
], Group.prototype, "contains_roles", void 0);
Group = __decorate([
    typeorm_1.Entity("s_group")
], Group);
exports.Group = Group;
//# sourceMappingURL=Group.js.map