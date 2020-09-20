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
exports.Record = void 0;
const typeorm_1 = require("typeorm");
class Record extends typeorm_1.BaseEntity {
    incrementUpdateCount() {
        this.update_count++;
    }
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Record.prototype, "guid", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Record.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Record.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], Record.prototype, "created_by", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], Record.prototype, "updated_by", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 80 }),
    __metadata("design:type", String)
], Record.prototype, "class_name", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], Record.prototype, "update_count", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Record.prototype, "incrementUpdateCount", null);
exports.Record = Record;
//# sourceMappingURL=Record.js.map