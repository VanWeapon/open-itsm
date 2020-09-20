"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groups1600302995298 = void 0;
class groups1600302995298 {
    constructor() {
        this.name = 'groups1600302995298';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "s_group_group_members_s_user" ("sGroupGuid" uuid NOT NULL, "sUserGuid" uuid NOT NULL, CONSTRAINT "PK_9b8f2b26ff339ca71281a82d070" PRIMARY KEY ("sGroupGuid", "sUserGuid"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_dc7afa165a51d0c1a57dd643d8" ON "s_group_group_members_s_user" ("sGroupGuid") `);
            yield queryRunner.query(`CREATE INDEX "IDX_4e130f33bc25940d3ca738c433" ON "s_group_group_members_s_user" ("sUserGuid") `);
            yield queryRunner.query(`ALTER TABLE "s_group_group_members_s_user" ADD CONSTRAINT "FK_dc7afa165a51d0c1a57dd643d8b" FOREIGN KEY ("sGroupGuid") REFERENCES "s_group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_group_group_members_s_user" ADD CONSTRAINT "FK_4e130f33bc25940d3ca738c4338" FOREIGN KEY ("sUserGuid") REFERENCES "s_user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "s_group_group_members_s_user" DROP CONSTRAINT "FK_4e130f33bc25940d3ca738c4338"`);
            yield queryRunner.query(`ALTER TABLE "s_group_group_members_s_user" DROP CONSTRAINT "FK_dc7afa165a51d0c1a57dd643d8b"`);
            yield queryRunner.query(`DROP INDEX "IDX_4e130f33bc25940d3ca738c433"`);
            yield queryRunner.query(`DROP INDEX "IDX_dc7afa165a51d0c1a57dd643d8"`);
            yield queryRunner.query(`DROP TABLE "s_group_group_members_s_user"`);
        });
    }
}
exports.groups1600302995298 = groups1600302995298;
//# sourceMappingURL=1600302995298-groups.js.map