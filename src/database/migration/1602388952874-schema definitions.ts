import {MigrationInterface, QueryRunner} from "typeorm";

export class schemaDefinitions1602388952874 implements MigrationInterface {
    name = 'schemaDefinitions1602388952874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core"."company" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(80) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_3700606e0851525b59edd40068b" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."department" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "departmentHeadGuid" uuid, "costCentreGuid" uuid, CONSTRAINT "PK_64cc30595cc3b9f9d721c4eb1fb" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_field_label" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "label" character varying(80), "elementGuid" uuid NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_8595fa21f7208bc7cf9f3e2bf54" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_dictionary" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "active" boolean NOT NULL DEFAULT false, "primary" boolean NOT NULL DEFAULT false, "read_only" boolean NOT NULL DEFAULT false, "mandatory" boolean NOT NULL DEFAULT false, "display" boolean NOT NULL DEFAULT false, "column_name" character varying(80) NOT NULL, "column_label" character varying(80) NOT NULL, "max_length" integer NOT NULL, "default_value" text NOT NULL, "tableNameGuid" uuid NOT NULL, "referenceTableGuid" uuid, CONSTRAINT "PK_da7e7228584447c3861bbcfa491" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_dbo" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(80) NOT NULL, "label" character varying(80) NOT NULL, "extends" character varying(80) NOT NULL, "autonumber" boolean NOT NULL, "number_prefix" text NOT NULL, "number_digits" integer NOT NULL, CONSTRAINT "UQ_345f00f0dbe6167ef91b2ffdd5c" UNIQUE ("name"), CONSTRAINT "PK_267ae621a17e864fb0410d27783" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_acl" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "type" character varying(40) NOT NULL, "tableGuid" uuid, "fieldGuid" uuid, CONSTRAINT "PK_eb0855771d983b0c38c64286dae" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_2f18ddaf6a8a44e27786c399de9" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_user" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "user_name" character varying(40) NOT NULL, "first_name" character varying(127) NOT NULL, "last_name" character varying(127) NOT NULL, "email" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "companyGuid" uuid, "departmentGuid" uuid, CONSTRAINT "UQ_b373507f4ce87417e25459df948" UNIQUE ("user_name"), CONSTRAINT "PK_5d8885a79f184d0de301ad7bfa4" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."cost_centre" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "code" character varying(255) NOT NULL DEFAULT '', "centreHeadGuid" uuid, CONSTRAINT "PK_8c465c5b6a1be3d10e993f54cf2" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_group" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "description" text, "managerGuid" uuid, CONSTRAINT "PK_d89d4e3227b15d05ddd5c8a247d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."task" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "summary" character varying(255) NOT NULL DEFAULT '', "details" text NOT NULL DEFAULT '', "assigneeGuid" uuid, "assignmentGroupGuid" uuid, "authorisedContactGuid" uuid, "parentTaskGuid" uuid, CONSTRAINT "PK_3347d13ab9755b8058b72b4a7b5" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "itsm"."sla_definition" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_c3dfd7820faede2783c09c30e2d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "itsm"."task_sla" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, CONSTRAINT "PK_8f53f0622602db730b8e999091a" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_script_server" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(80) NOT NULL, "script" text NOT NULL, "when" character varying NOT NULL, "on" character varying NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_f3af4c43a3b6f7c7521528baac9" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."s_user_has_role" ("sUserGuid" uuid NOT NULL, "sRoleGuid" uuid NOT NULL, CONSTRAINT "PK_6b451cc8f48b861e5854d3769d3" PRIMARY KEY ("sUserGuid", "sRoleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a9db876cb0cbfd52166adc57eb" ON "system"."s_user_has_role" ("sUserGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_74df9a3c53e89be1cb3e1a49fc" ON "system"."s_user_has_role" ("sRoleGuid") `);
        await queryRunner.query(`CREATE TABLE "system"."s_group_membership" ("sGroupGuid" uuid NOT NULL, "sUserGuid" uuid NOT NULL, CONSTRAINT "PK_a9a814b659e8df53d967b604a28" PRIMARY KEY ("sGroupGuid", "sUserGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_138aeac59593da00848e24bf3d" ON "system"."s_group_membership" ("sGroupGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_5f970956ad236d5e3f14535d7b" ON "system"."s_group_membership" ("sUserGuid") `);
        await queryRunner.query(`CREATE TABLE "system"."s_group_contains_role" ("sGroupGuid" uuid NOT NULL, "sRoleGuid" uuid NOT NULL, CONSTRAINT "PK_64b00e5f66658e77242bc56805a" PRIMARY KEY ("sGroupGuid", "sRoleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_adf0a6c7baca061ff7b87cd7a0" ON "system"."s_group_contains_role" ("sGroupGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_bc8e83848094d38e7cb58f122a" ON "system"."s_group_contains_role" ("sRoleGuid") `);
        await queryRunner.query(`ALTER TABLE "core"."department" ADD CONSTRAINT "FK_535f12599ac55d043d7b4253c78" FOREIGN KEY ("departmentHeadGuid") REFERENCES "system"."s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."department" ADD CONSTRAINT "FK_4480f5a6a32bf896a705763c33f" FOREIGN KEY ("costCentreGuid") REFERENCES "core"."cost_centre"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_field_label" ADD CONSTRAINT "FK_b066edb9d70c65a55939c9afb05" FOREIGN KEY ("elementGuid") REFERENCES "system"."s_dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_field_label" ADD CONSTRAINT "FK_4df5a6dacd252c340545691f16b" FOREIGN KEY ("tableGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ADD CONSTRAINT "FK_bead7c423ddcfb98244138df016" FOREIGN KEY ("tableNameGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ADD CONSTRAINT "FK_3786d74151227029e8fe4a2cf66" FOREIGN KEY ("referenceTableGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" ADD CONSTRAINT "FK_42ded299606792c7691bb233298" FOREIGN KEY ("tableGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" ADD CONSTRAINT "FK_1200f544835f03de54aa63b8406" FOREIGN KEY ("fieldGuid") REFERENCES "system"."s_dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_user" ADD CONSTRAINT "FK_b44a714ab03800cb433d2cdb1f3" FOREIGN KEY ("companyGuid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_user" ADD CONSTRAINT "FK_cb9de0a76ef385a34e9e52db44f" FOREIGN KEY ("departmentGuid") REFERENCES "core"."department"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ADD CONSTRAINT "FK_520a58655864c5f6f0cce75422b" FOREIGN KEY ("centreHeadGuid") REFERENCES "system"."s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_group" ADD CONSTRAINT "FK_a54b2349755001c18834da2f6df" FOREIGN KEY ("managerGuid") REFERENCES "system"."s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_ccbcf31775c029a912a5d3c8d06" FOREIGN KEY ("assigneeGuid") REFERENCES "system"."s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_e5d2ed696b1fcb77bb6e0eb0a66" FOREIGN KEY ("assignmentGroupGuid") REFERENCES "system"."s_group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_fa711b887d374a0094e9cb699de" FOREIGN KEY ("authorisedContactGuid") REFERENCES "system"."s_user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_450767a44d27f0125590b1dc128" FOREIGN KEY ("parentTaskGuid") REFERENCES "core"."task"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_script_server" ADD CONSTRAINT "FK_dc503b86e55f88bff3bbc362e51" FOREIGN KEY ("tableGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_user_has_role" ADD CONSTRAINT "FK_a9db876cb0cbfd52166adc57eb1" FOREIGN KEY ("sUserGuid") REFERENCES "system"."s_user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_user_has_role" ADD CONSTRAINT "FK_74df9a3c53e89be1cb3e1a49fcc" FOREIGN KEY ("sRoleGuid") REFERENCES "system"."s_role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_membership" ADD CONSTRAINT "FK_138aeac59593da00848e24bf3d7" FOREIGN KEY ("sGroupGuid") REFERENCES "system"."s_group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_membership" ADD CONSTRAINT "FK_5f970956ad236d5e3f14535d7b2" FOREIGN KEY ("sUserGuid") REFERENCES "system"."s_user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_contains_role" ADD CONSTRAINT "FK_adf0a6c7baca061ff7b87cd7a05" FOREIGN KEY ("sGroupGuid") REFERENCES "system"."s_group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_contains_role" ADD CONSTRAINT "FK_bc8e83848094d38e7cb58f122a9" FOREIGN KEY ("sRoleGuid") REFERENCES "system"."s_role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_group_contains_role" DROP CONSTRAINT "FK_bc8e83848094d38e7cb58f122a9"`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_contains_role" DROP CONSTRAINT "FK_adf0a6c7baca061ff7b87cd7a05"`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_membership" DROP CONSTRAINT "FK_5f970956ad236d5e3f14535d7b2"`);
        await queryRunner.query(`ALTER TABLE "system"."s_group_membership" DROP CONSTRAINT "FK_138aeac59593da00848e24bf3d7"`);
        await queryRunner.query(`ALTER TABLE "system"."s_user_has_role" DROP CONSTRAINT "FK_74df9a3c53e89be1cb3e1a49fcc"`);
        await queryRunner.query(`ALTER TABLE "system"."s_user_has_role" DROP CONSTRAINT "FK_a9db876cb0cbfd52166adc57eb1"`);
        await queryRunner.query(`ALTER TABLE "system"."s_script_server" DROP CONSTRAINT "FK_dc503b86e55f88bff3bbc362e51"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_450767a44d27f0125590b1dc128"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_fa711b887d374a0094e9cb699de"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_e5d2ed696b1fcb77bb6e0eb0a66"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_ccbcf31775c029a912a5d3c8d06"`);
        await queryRunner.query(`ALTER TABLE "system"."s_group" DROP CONSTRAINT "FK_a54b2349755001c18834da2f6df"`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" DROP CONSTRAINT "FK_520a58655864c5f6f0cce75422b"`);
        await queryRunner.query(`ALTER TABLE "system"."s_user" DROP CONSTRAINT "FK_cb9de0a76ef385a34e9e52db44f"`);
        await queryRunner.query(`ALTER TABLE "system"."s_user" DROP CONSTRAINT "FK_b44a714ab03800cb433d2cdb1f3"`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" DROP CONSTRAINT "FK_1200f544835f03de54aa63b8406"`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" DROP CONSTRAINT "FK_42ded299606792c7691bb233298"`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" DROP CONSTRAINT "FK_3786d74151227029e8fe4a2cf66"`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" DROP CONSTRAINT "FK_bead7c423ddcfb98244138df016"`);
        await queryRunner.query(`ALTER TABLE "system"."s_field_label" DROP CONSTRAINT "FK_4df5a6dacd252c340545691f16b"`);
        await queryRunner.query(`ALTER TABLE "system"."s_field_label" DROP CONSTRAINT "FK_b066edb9d70c65a55939c9afb05"`);
        await queryRunner.query(`ALTER TABLE "core"."department" DROP CONSTRAINT "FK_4480f5a6a32bf896a705763c33f"`);
        await queryRunner.query(`ALTER TABLE "core"."department" DROP CONSTRAINT "FK_535f12599ac55d043d7b4253c78"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_bc8e83848094d38e7cb58f122a"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_adf0a6c7baca061ff7b87cd7a0"`);
        await queryRunner.query(`DROP TABLE "system"."s_group_contains_role"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_5f970956ad236d5e3f14535d7b"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_138aeac59593da00848e24bf3d"`);
        await queryRunner.query(`DROP TABLE "system"."s_group_membership"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_74df9a3c53e89be1cb3e1a49fc"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_a9db876cb0cbfd52166adc57eb"`);
        await queryRunner.query(`DROP TABLE "system"."s_user_has_role"`);
        await queryRunner.query(`DROP TABLE "system"."s_script_server"`);
        await queryRunner.query(`DROP TABLE "itsm"."task_sla"`);
        await queryRunner.query(`DROP TABLE "itsm"."sla_definition"`);
        await queryRunner.query(`DROP TABLE "core"."task"`);
        await queryRunner.query(`DROP TABLE "system"."s_group"`);
        await queryRunner.query(`DROP TABLE "core"."cost_centre"`);
        await queryRunner.query(`DROP TABLE "system"."s_user"`);
        await queryRunner.query(`DROP TABLE "system"."s_role"`);
        await queryRunner.query(`DROP TABLE "system"."s_acl"`);
        await queryRunner.query(`DROP TABLE "system"."s_dbo"`);
        await queryRunner.query(`DROP TABLE "system"."s_dictionary"`);
        await queryRunner.query(`DROP TABLE "system"."s_field_label"`);
        await queryRunner.query(`DROP TABLE "core"."department"`);
        await queryRunner.query(`DROP TABLE "core"."company"`);
    }

}
