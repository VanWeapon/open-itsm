import {MigrationInterface, QueryRunner} from "typeorm";

export class rebuild1600304003347 implements MigrationInterface {
    name = 'rebuild1600304003347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "s_field_class" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(40) NOT NULL, CONSTRAINT "PK_30434432834912ee0d5c029c382" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_field_label" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "label" character varying(80), "elementGuid" uuid NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_96a607062cb0584f3223d701b1d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_dictionary" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "active" boolean NOT NULL DEFAULT false, "primary" boolean NOT NULL DEFAULT false, "read_only" boolean NOT NULL DEFAULT false, "mandatory" boolean NOT NULL DEFAULT false, "display" boolean NOT NULL DEFAULT false, "column_name" character varying(80) NOT NULL, "column_label" character varying(80) NOT NULL, "max_length" integer NOT NULL, "default_value" text NOT NULL, "internalTypeGuid" uuid NOT NULL, "tableNameGuid" uuid NOT NULL, "referenceTableGuid" uuid, CONSTRAINT "PK_69de9a7a400089867ec3f72eff8" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_dbo" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(80) NOT NULL, "label" character varying(80) NOT NULL, "extends" character varying(80) NOT NULL, "autonumber" boolean NOT NULL, "number_prefix" text NOT NULL, "number_digits" integer NOT NULL, CONSTRAINT "PK_5ef3fe626a590c6f57d7dbd724c" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "includesRolesGuid" uuid, CONSTRAINT "PK_1683523dc9f12e52abca417c43c" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_acl" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "type" character varying(40) NOT NULL, "tableGuid" uuid, "fieldGuid" uuid, CONSTRAINT "PK_8d85da3eb43c31d3cd9c730dae0" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_user" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "first_name" character varying(127) NOT NULL, "last_name" character varying(127) NOT NULL, "email" character varying(255) NOT NULL, "user_name" character varying(40) NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_a953bb0148fb023cda1d8e7c0b1" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_group" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "description" text, "managerGuid" uuid, CONSTRAINT "PK_1e53f6f5d43466acb33fa6e2ccd" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "s_user_has_role" ("sUserGuid" uuid NOT NULL, "sRoleGuid" uuid NOT NULL, CONSTRAINT "PK_648638e0f3ec88606556641e0ad" PRIMARY KEY ("sUserGuid", "sRoleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_306999773405a96eee07e0af97" ON "s_user_has_role" ("sUserGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_4674a3fd47ffc3e3a7f6ef50aa" ON "s_user_has_role" ("sRoleGuid") `);
        await queryRunner.query(`CREATE TABLE "s_group_membership" ("sGroupGuid" uuid NOT NULL, "sUserGuid" uuid NOT NULL, CONSTRAINT "PK_435243229206cd896f65aa5e12c" PRIMARY KEY ("sGroupGuid", "sUserGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5da665d4ad0fd618e9df807367" ON "s_group_membership" ("sGroupGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_33de70b601c9d88247157bc4fb" ON "s_group_membership" ("sUserGuid") `);
        await queryRunner.query(`CREATE TABLE "s_group_contains_role" ("sGroupGuid" uuid NOT NULL, "sRoleGuid" uuid NOT NULL, CONSTRAINT "PK_6b0ad26d4f93c93ee0306c3e852" PRIMARY KEY ("sGroupGuid", "sRoleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_713650b0569006a3b84e212a53" ON "s_group_contains_role" ("sGroupGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_6bb7d3fdff83c9e33fcabb9db1" ON "s_group_contains_role" ("sRoleGuid") `);
        await queryRunner.query(`ALTER TABLE "s_field_label" ADD CONSTRAINT "FK_1127cc719870cb3d7e61660f8b3" FOREIGN KEY ("elementGuid") REFERENCES "s_dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_field_label" ADD CONSTRAINT "FK_c750fe9587f86c6156e0198e5ce" FOREIGN KEY ("tableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_c990a4ffa71ba3244885ca208a1" FOREIGN KEY ("internalTypeGuid") REFERENCES "s_field_class"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb" FOREIGN KEY ("tableNameGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_dictionary" ADD CONSTRAINT "FK_09c7864451f8712727345217919" FOREIGN KEY ("referenceTableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_role" ADD CONSTRAINT "FK_68974f40f1c739f9798caeb45c5" FOREIGN KEY ("includesRolesGuid") REFERENCES "s_role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_acl" ADD CONSTRAINT "FK_37808558b1a9af5647059def978" FOREIGN KEY ("tableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_acl" ADD CONSTRAINT "FK_5f2ba51c07bb00c4ca2db171d60" FOREIGN KEY ("fieldGuid") REFERENCES "s_dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_group" ADD CONSTRAINT "FK_5e7d0130b454d80d397a5440403" FOREIGN KEY ("managerGuid") REFERENCES "s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_user_has_role" ADD CONSTRAINT "FK_306999773405a96eee07e0af978" FOREIGN KEY ("sUserGuid") REFERENCES "s_user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_user_has_role" ADD CONSTRAINT "FK_4674a3fd47ffc3e3a7f6ef50aaf" FOREIGN KEY ("sRoleGuid") REFERENCES "s_role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_group_membership" ADD CONSTRAINT "FK_5da665d4ad0fd618e9df8073671" FOREIGN KEY ("sGroupGuid") REFERENCES "s_group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_group_membership" ADD CONSTRAINT "FK_33de70b601c9d88247157bc4fbc" FOREIGN KEY ("sUserGuid") REFERENCES "s_user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_group_contains_role" ADD CONSTRAINT "FK_713650b0569006a3b84e212a53c" FOREIGN KEY ("sGroupGuid") REFERENCES "s_group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "s_group_contains_role" ADD CONSTRAINT "FK_6bb7d3fdff83c9e33fcabb9db1a" FOREIGN KEY ("sRoleGuid") REFERENCES "s_role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "s_group_contains_role" DROP CONSTRAINT "FK_6bb7d3fdff83c9e33fcabb9db1a"`);
        await queryRunner.query(`ALTER TABLE "s_group_contains_role" DROP CONSTRAINT "FK_713650b0569006a3b84e212a53c"`);
        await queryRunner.query(`ALTER TABLE "s_group_membership" DROP CONSTRAINT "FK_33de70b601c9d88247157bc4fbc"`);
        await queryRunner.query(`ALTER TABLE "s_group_membership" DROP CONSTRAINT "FK_5da665d4ad0fd618e9df8073671"`);
        await queryRunner.query(`ALTER TABLE "s_user_has_role" DROP CONSTRAINT "FK_4674a3fd47ffc3e3a7f6ef50aaf"`);
        await queryRunner.query(`ALTER TABLE "s_user_has_role" DROP CONSTRAINT "FK_306999773405a96eee07e0af978"`);
        await queryRunner.query(`ALTER TABLE "s_group" DROP CONSTRAINT "FK_5e7d0130b454d80d397a5440403"`);
        await queryRunner.query(`ALTER TABLE "s_acl" DROP CONSTRAINT "FK_5f2ba51c07bb00c4ca2db171d60"`);
        await queryRunner.query(`ALTER TABLE "s_acl" DROP CONSTRAINT "FK_37808558b1a9af5647059def978"`);
        await queryRunner.query(`ALTER TABLE "s_role" DROP CONSTRAINT "FK_68974f40f1c739f9798caeb45c5"`);
        await queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_09c7864451f8712727345217919"`);
        await queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_9fef25794e5fe1e188f5b33b4cb"`);
        await queryRunner.query(`ALTER TABLE "s_dictionary" DROP CONSTRAINT "FK_c990a4ffa71ba3244885ca208a1"`);
        await queryRunner.query(`ALTER TABLE "s_field_label" DROP CONSTRAINT "FK_c750fe9587f86c6156e0198e5ce"`);
        await queryRunner.query(`ALTER TABLE "s_field_label" DROP CONSTRAINT "FK_1127cc719870cb3d7e61660f8b3"`);
        await queryRunner.query(`DROP INDEX "IDX_6bb7d3fdff83c9e33fcabb9db1"`);
        await queryRunner.query(`DROP INDEX "IDX_713650b0569006a3b84e212a53"`);
        await queryRunner.query(`DROP TABLE "s_group_contains_role"`);
        await queryRunner.query(`DROP INDEX "IDX_33de70b601c9d88247157bc4fb"`);
        await queryRunner.query(`DROP INDEX "IDX_5da665d4ad0fd618e9df807367"`);
        await queryRunner.query(`DROP TABLE "s_group_membership"`);
        await queryRunner.query(`DROP INDEX "IDX_4674a3fd47ffc3e3a7f6ef50aa"`);
        await queryRunner.query(`DROP INDEX "IDX_306999773405a96eee07e0af97"`);
        await queryRunner.query(`DROP TABLE "s_user_has_role"`);
        await queryRunner.query(`DROP TABLE "s_group"`);
        await queryRunner.query(`DROP TABLE "s_user"`);
        await queryRunner.query(`DROP TABLE "s_acl"`);
        await queryRunner.query(`DROP TABLE "s_role"`);
        await queryRunner.query(`DROP TABLE "s_dbo"`);
        await queryRunner.query(`DROP TABLE "s_dictionary"`);
        await queryRunner.query(`DROP TABLE "s_field_label"`);
        await queryRunner.query(`DROP TABLE "s_field_class"`);
    }

}
