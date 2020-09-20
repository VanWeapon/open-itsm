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
exports.init1599722740840 = void 0;
class init1599722740840 {
    constructor() {
        this.name = 'init1599722740840';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "s_dbo" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(80) NOT NULL, "label" character varying(80) NOT NULL, "extends" character varying(80) NOT NULL, "autonumber" boolean NOT NULL, "number_prefix" text NOT NULL, "number_digits" integer NOT NULL, CONSTRAINT "PK_5ef3fe626a590c6f57d7dbd724c" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`CREATE TABLE "s_dictionary" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "active" boolean NOT NULL, "primary" boolean NOT NULL, "read_only" boolean NOT NULL, "mandatory" boolean NOT NULL, "display" boolean NOT NULL, "column_name" character varying(80) NOT NULL, "column_label" character varying(80) NOT NULL, "internal_type" character varying(80) NOT NULL, "max_length" integer NOT NULL, "default_value" text NOT NULL, "tableNameGuid" uuid, "referenceTableGuid" uuid, CONSTRAINT "PK_69de9a7a400089867ec3f72eff8" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`CREATE TABLE "s_user" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_a953bb0148fb023cda1d8e7c0b1" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb" FOREIGN KEY ("tableNameGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_09c7864451f8712727345217919" FOREIGN KEY ("referenceTableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_09c7864451f8712727345217919"`);
            yield queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb"`);
            yield queryRunner.query(`DROP TABLE "s_user"`);
            yield queryRunner.query(`DROP TABLE "s_dictionary"`);
            yield queryRunner.query(`DROP TABLE "s_dbo"`);
        });
    }
}
exports.init1599722740840 = init1599722740840;
//# sourceMappingURL=1599722740840-init.js.map