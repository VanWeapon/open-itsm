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
exports.groups1600303287968 = void 0;
class groups1600303287968 {
    constructor() {
        this.name = 'groups1600303287968';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "s_group_membership" ("sGroupGuid" uuid NOT NULL, "sUserGuid" uuid NOT NULL, CONSTRAINT "PK_435243229206cd896f65aa5e12c" PRIMARY KEY ("sGroupGuid", "sUserGuid"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_5da665d4ad0fd618e9df807367" ON "s_group_membership" ("sGroupGuid") `);
            yield queryRunner.query(`CREATE INDEX "IDX_33de70b601c9d88247157bc4fb" ON "s_group_membership" ("sUserGuid") `);
            yield queryRunner.query(`ALTER TABLE "s_group_membership" ADD CONSTRAINT "FK_5da665d4ad0fd618e9df8073671" FOREIGN KEY ("sGroupGuid") REFERENCES "s_group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_group_membership" ADD CONSTRAINT "FK_33de70b601c9d88247157bc4fbc" FOREIGN KEY ("sUserGuid") REFERENCES "s_user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "s_group_membership" DROP CONSTRAINT "FK_33de70b601c9d88247157bc4fbc"`);
            yield queryRunner.query(`ALTER TABLE "s_group_membership" DROP CONSTRAINT "FK_5da665d4ad0fd618e9df8073671"`);
            yield queryRunner.query(`DROP INDEX "IDX_33de70b601c9d88247157bc4fb"`);
            yield queryRunner.query(`DROP INDEX "IDX_5da665d4ad0fd618e9df807367"`);
            yield queryRunner.query(`DROP TABLE "s_group_membership"`);
        });
    }
}
exports.groups1600303287968 = groups1600303287968;
//# sourceMappingURL=1600303287968-groups.js.map