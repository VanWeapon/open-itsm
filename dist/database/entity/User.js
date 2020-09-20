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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Group_1 = require("./Group");
const Record_1 = require("./Record");
const Role_1 = require("./Role");
let User = class User extends Record_1.Record {
    setClassName() {
        this.class_name = "s_user";
    }
    setFullName() {
        if (this.first_name &&
            this.last_name &&
            this.name !== `${this.first_name} ${this.last_name}`) {
            this.name = `${this.first_name} ${this.last_name}`;
        }
    }
};
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "setClassName", null);
__decorate([
    typeorm_1.Column("varchar", { length: 127 }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 127 }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "user_name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "setFullName", null);
__decorate([
    typeorm_1.OneToMany(() => Group_1.Group, (group) => group.manager),
    __metadata("design:type", Array)
], User.prototype, "s_group_managers", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Role_1.Role),
    typeorm_1.JoinTable({ name: "s_user_has_role" }),
    __metadata("design:type", Array)
], User.prototype, "user_roles", void 0);
User = __decorate([
    typeorm_1.Entity("s_user")
], User);
exports.User = User;
//# sourceMappingURL=User.js.map