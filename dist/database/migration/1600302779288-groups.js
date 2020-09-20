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
exports.groups1600302779288 = void 0;
class groups1600302779288 {
    constructor() {
        this.name = 'groups1600302779288';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "s_field_label" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "label" character varying(80), "elementGuid" uuid NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_96a607062cb0584f3223d701b1d" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`CREATE TABLE "s_role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "includesRolesGuid" uuid, CONSTRAINT "PK_1683523dc9f12e52abca417c43c" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`CREATE TABLE "s_acl" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "type" character varying(40) NOT NULL, "tableGuid" uuid, "fieldGuid" uuid, CONSTRAINT "PK_8d85da3eb43c31d3cd9c730dae0" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`CREATE TABLE "s_group" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "description" text, "managerGuid" uuid, CONSTRAINT "PK_1e53f6f5d43466acb33fa6e2ccd" PRIMARY KEY ("guid"))`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "user_name" character varying(40) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "name" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "first_name"`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "first_name" character varying(127) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "last_name"`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "last_name" character varying(127) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "email" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_field_label" ADD CONSTRAINT "FK_1127cc719870cb3d7e61660f8b3" FOREIGN KEY ("elementGuid") REFERENCES "s_dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_field_label" ADD CONSTRAINT "FK_c750fe9587f86c6156e0198e5ce" FOREIGN KEY ("tableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_role" ADD CONSTRAINT "FK_68974f40f1c739f9798caeb45c5" FOREIGN KEY ("includesRolesGuid") REFERENCES "s_role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_acl" ADD CONSTRAINT "FK_37808558b1a9af5647059def978" FOREIGN KEY ("tableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_acl" ADD CONSTRAINT "FK_5f2ba51c07bb00c4ca2db171d60" FOREIGN KEY ("fieldGuid") REFERENCES "s_dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "s_group" ADD CONSTRAINT "FK_5e7d0130b454d80d397a5440403" FOREIGN KEY ("managerGuid") REFERENCES "s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "s_group" DROP CONSTRAINT "FK_5e7d0130b454d80d397a5440403"`);
            yield queryRunner.query(`ALTER TABLE "s_acl" DROP CONSTRAINT "FK_5f2ba51c07bb00c4ca2db171d60"`);
            yield queryRunner.query(`ALTER TABLE "s_acl" DROP CONSTRAINT "FK_37808558b1a9af5647059def978"`);
            yield queryRunner.query(`ALTER TABLE "s_role" DROP CONSTRAINT "FK_68974f40f1c739f9798caeb45c5"`);
            yield queryRunner.query(`ALTER TABLE "s_field_label" DROP CONSTRAINT "FK_c750fe9587f86c6156e0198e5ce"`);
            yield queryRunner.query(`ALTER TABLE "s_field_label" DROP CONSTRAINT "FK_1127cc719870cb3d7e61660f8b3"`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "email" text NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "last_name"`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "last_name" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "first_name"`);
            yield queryRunner.query(`ALTER TABLE "s_user" ADD "first_name" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "s_user" DROP COLUMN "user_name"`);
            yield queryRunner.query(`DROP TABLE "s_group"`);
            yield queryRunner.query(`DROP TABLE "s_acl"`);
            yield queryRunner.query(`DROP TABLE "s_role"`);
            yield queryRunner.query(`DROP TABLE "s_field_label"`);
        });
    }
}
exports.groups1600302779288 = groups1600302779288;
//# sourceMappingURL=1600302779288-groups.js.map