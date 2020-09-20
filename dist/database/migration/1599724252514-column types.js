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
exports.columnTypes1599724252514 = void 0;
class columnTypes1599724252514 {
    constructor() {
        this.name = 'columnTypes1599724252514';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "s_field_class" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(40) NOT NULL, CONSTRAINT "PK_30434432834912ee0d5c029c382" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP COLUMN "internal_type"`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD "internalTypeGuid" uuid NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb"`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "active" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "primary" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "read_only" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "mandatory" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "display" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "tableNameGuid" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_c990a4ffa71ba3244885ca208a1" FOREIGN KEY ("internalTypeGuid") REFERENCES "s_field_class"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb" FOREIGN KEY ("tableNameGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb"`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_c990a4ffa71ba3244885ca208a1"`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "tableNameGuid" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "display" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "mandatory" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "read_only" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "primary" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ALTER COLUMN "active" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb" FOREIGN KEY ("tableNameGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP COLUMN "internalTypeGuid"`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD "internal_type" character varying(80) NOT NULL`);
            yield queryRunner.query(`DROP TABLE "s_field_class"`);
        });
    }
}
exports.columnTypes1599724252514 = columnTypes1599724252514;
//# sourceMappingURL=1599724252514-column types.js.map