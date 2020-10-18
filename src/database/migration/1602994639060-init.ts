import {MigrationInterface, QueryRunner} from "typeorm";

export class init1602994639060 implements MigrationInterface {
    name = 'init1602994639060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core"."company" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(80) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_3700606e0851525b59edd40068b" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."department" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(255) NOT NULL, "description" text NOT NULL, "departmentHeadGuid" uuid, "costCentreGuid" uuid, CONSTRAINT "PK_64cc30595cc3b9f9d721c4eb1fb" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."field_label" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "label" character varying(80), "elementGuid" uuid NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_71e8dd10df17990f660cb60560e" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."dictionary" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT false, "primary" boolean NOT NULL DEFAULT false, "read_only" boolean NOT NULL DEFAULT false, "mandatory" boolean NOT NULL DEFAULT false, "display" boolean NOT NULL DEFAULT false, "column_name" character varying(80) NOT NULL, "column_label" character varying(80) NOT NULL, "max_length" integer NOT NULL DEFAULT 255, "default_value" text, "tableGuid" uuid NOT NULL, "referenceTableGuid" uuid, CONSTRAINT "PK_a154bab24262c7b859e87d18c34" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."dbo" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(80) NOT NULL, "label" character varying(80) NOT NULL, "extends" character varying(80), "autonumber" boolean NOT NULL DEFAULT false, "number_prefix" text, "number_digits" integer, CONSTRAINT "UQ_22f9b3b0c6d10fb0093a7e3b18f" UNIQUE ("name"), CONSTRAINT "PK_ddf14391fda1e6d3dac4f563535" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."acl" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "type" character varying(40) NOT NULL, "operation" character varying(40) NOT NULL, "tableGuid" uuid, "fieldGuid" uuid, CONSTRAINT "PK_4bf88b969c77e4606d6a3ad596c" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(255) NOT NULL, CONSTRAINT "PK_1ec12177b9098885b982f2f7bd1" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."user" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "user_name" character varying(40) NOT NULL, "first_name" character varying(127) NOT NULL, "last_name" character varying(127) NOT NULL, "email" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "departmentGuid" uuid, CONSTRAINT "UQ_368fd20c10764c99e257662e13c" UNIQUE ("user_name"), CONSTRAINT "PK_421be1c35df3ec77ae5d15f73fc" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."cost_centre" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(255) NOT NULL, "description" text NOT NULL, "code" character varying(255) NOT NULL DEFAULT '', "centreHeadGuid" uuid, CONSTRAINT "PK_8c465c5b6a1be3d10e993f54cf2" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."group" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(255) NOT NULL, "description" text, "managerGuid" uuid, CONSTRAINT "PK_57a8a795270b3d834546a26864c" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."task" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "summary" character varying(255) NOT NULL DEFAULT '', "details" text NOT NULL DEFAULT '', "assigneeGuid" uuid, "assignmentGroupGuid" uuid, "authorisedContactGuid" uuid, "parentTaskGuid" uuid, CONSTRAINT "PK_3347d13ab9755b8058b72b4a7b5" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "itsm"."sla_definition" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(255) NOT NULL, CONSTRAINT "PK_c3dfd7820faede2783c09c30e2d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "itsm"."task_sla" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, CONSTRAINT "PK_8f53f0622602db730b8e999091a" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."server_script" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(80) NOT NULL, "script" text NOT NULL, "when" character varying NOT NULL, "on" character varying NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_37634d2bd85d3a7cfb7d2713c71" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."ui_action" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(255) NOT NULL, "active" boolean NOT NULL DEFAULT true, "global" boolean NOT NULL DEFAULT false, "order" integer NOT NULL DEFAULT 100, "description" text NOT NULL DEFAULT '', "tooltip" text NOT NULL DEFAULT '', "form_button" boolean NOT NULL DEFAULT false, "form_context" boolean NOT NULL DEFAULT false, "form_link" boolean NOT NULL DEFAULT false, "list_button" boolean NOT NULL DEFAULT false, "list_context" boolean NOT NULL DEFAULT false, "list_link" boolean NOT NULL DEFAULT false, "client" boolean NOT NULL DEFAULT false, "server" boolean NOT NULL DEFAULT false, "client_script" text NOT NULL DEFAULT '', "server_script" text NOT NULL DEFAULT '', "tableGuid" uuid, CONSTRAINT "PK_27fcb90fe72c12cc9a2a65a29dc" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."user_has_role" ("userGuid" uuid NOT NULL, "roleGuid" uuid NOT NULL, CONSTRAINT "PK_4c380f028e6901a1fb97a6ee66a" PRIMARY KEY ("userGuid", "roleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_59a93e06bac9758f039e11745c" ON "system"."user_has_role" ("userGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_b784423b727a21f99184ad1087" ON "system"."user_has_role" ("roleGuid") `);
        await queryRunner.query(`CREATE TABLE "system"."group_membership" ("groupGuid" uuid NOT NULL, "userGuid" uuid NOT NULL, CONSTRAINT "PK_149e892ed0e7b59c47e2d531a25" PRIMARY KEY ("groupGuid", "userGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d9ae43821a1309a05fb2cc312e" ON "system"."group_membership" ("groupGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_b8c3f6ef73bff7165ef1438394" ON "system"."group_membership" ("userGuid") `);
        await queryRunner.query(`CREATE TABLE "system"."group_contains_role" ("groupGuid" uuid NOT NULL, "roleGuid" uuid NOT NULL, CONSTRAINT "PK_8536188fd1f3ad67b8885404600" PRIMARY KEY ("groupGuid", "roleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb5e9703f9d9cf94b47e7f9fdf" ON "system"."group_contains_role" ("groupGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_8c03f4535db932e0f31a215354" ON "system"."group_contains_role" ("roleGuid") `);
        await queryRunner.query(`CREATE TABLE "system"."ui_action_requires_role" ("uiActionGuid" uuid NOT NULL, "roleGuid" uuid NOT NULL, CONSTRAINT "PK_051ff5923aa3e2d6481f5f6afe4" PRIMARY KEY ("uiActionGuid", "roleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bcb21d907b99a7005553f508bb" ON "system"."ui_action_requires_role" ("uiActionGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_79981067ab626c4987ef34e608" ON "system"."ui_action_requires_role" ("roleGuid") `);
        await queryRunner.query(`ALTER TABLE "core"."department" ADD CONSTRAINT "FK_535f12599ac55d043d7b4253c78" FOREIGN KEY ("departmentHeadGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."department" ADD CONSTRAINT "FK_4480f5a6a32bf896a705763c33f" FOREIGN KEY ("costCentreGuid") REFERENCES "core"."cost_centre"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."field_label" ADD CONSTRAINT "FK_67ee6cad272ef0709bd9ea744db" FOREIGN KEY ("elementGuid") REFERENCES "system"."dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."field_label" ADD CONSTRAINT "FK_6d402a8c214ca82f50806bf47d2" FOREIGN KEY ("tableGuid") REFERENCES "system"."dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."dictionary" ADD CONSTRAINT "FK_e7a6ac85ff6ddc2c6c2fb868c3d" FOREIGN KEY ("tableGuid") REFERENCES "system"."dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."dictionary" ADD CONSTRAINT "FK_670d3af073508aafd2958a5257e" FOREIGN KEY ("referenceTableGuid") REFERENCES "system"."dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."acl" ADD CONSTRAINT "FK_6f4a31f5ecccf5d16864b7bb0b0" FOREIGN KEY ("tableGuid") REFERENCES "system"."dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."acl" ADD CONSTRAINT "FK_5d59302fdf0e63c2efb13ed874b" FOREIGN KEY ("fieldGuid") REFERENCES "system"."dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user" ADD CONSTRAINT "FK_9b4acca00abebb4c580fc6fbf7b" FOREIGN KEY ("departmentGuid") REFERENCES "core"."department"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ADD CONSTRAINT "FK_520a58655864c5f6f0cce75422b" FOREIGN KEY ("centreHeadGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group" ADD CONSTRAINT "FK_24cb014529a631a05e7ec236274" FOREIGN KEY ("managerGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_ccbcf31775c029a912a5d3c8d06" FOREIGN KEY ("assigneeGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_e5d2ed696b1fcb77bb6e0eb0a66" FOREIGN KEY ("assignmentGroupGuid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_fa711b887d374a0094e9cb699de" FOREIGN KEY ("authorisedContactGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_450767a44d27f0125590b1dc128" FOREIGN KEY ("parentTaskGuid") REFERENCES "core"."task"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."server_script" ADD CONSTRAINT "FK_2213cf44460b21ae311cff2e77b" FOREIGN KEY ("tableGuid") REFERENCES "system"."dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action" ADD CONSTRAINT "FK_edacaeda52b5d40c9793a4f2572" FOREIGN KEY ("tableGuid") REFERENCES "system"."dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_59a93e06bac9758f039e11745c8" FOREIGN KEY ("userGuid") REFERENCES "system"."user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_b784423b727a21f99184ad1087c" FOREIGN KEY ("roleGuid") REFERENCES "system"."role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" ADD CONSTRAINT "FK_d9ae43821a1309a05fb2cc312ef" FOREIGN KEY ("groupGuid") REFERENCES "system"."group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" ADD CONSTRAINT "FK_b8c3f6ef73bff7165ef14383944" FOREIGN KEY ("userGuid") REFERENCES "system"."user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" ADD CONSTRAINT "FK_cb5e9703f9d9cf94b47e7f9fdf0" FOREIGN KEY ("groupGuid") REFERENCES "system"."group"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" ADD CONSTRAINT "FK_8c03f4535db932e0f31a215354e" FOREIGN KEY ("roleGuid") REFERENCES "system"."role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" ADD CONSTRAINT "FK_bcb21d907b99a7005553f508bb7" FOREIGN KEY ("uiActionGuid") REFERENCES "system"."ui_action"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" ADD CONSTRAINT "FK_79981067ab626c4987ef34e6087" FOREIGN KEY ("roleGuid") REFERENCES "system"."role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" DROP CONSTRAINT "FK_79981067ab626c4987ef34e6087"`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" DROP CONSTRAINT "FK_bcb21d907b99a7005553f508bb7"`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" DROP CONSTRAINT "FK_8c03f4535db932e0f31a215354e"`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" DROP CONSTRAINT "FK_cb5e9703f9d9cf94b47e7f9fdf0"`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" DROP CONSTRAINT "FK_b8c3f6ef73bff7165ef14383944"`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" DROP CONSTRAINT "FK_d9ae43821a1309a05fb2cc312ef"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_b784423b727a21f99184ad1087c"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_59a93e06bac9758f039e11745c8"`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action" DROP CONSTRAINT "FK_edacaeda52b5d40c9793a4f2572"`);
        await queryRunner.query(`ALTER TABLE "system"."server_script" DROP CONSTRAINT "FK_2213cf44460b21ae311cff2e77b"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_450767a44d27f0125590b1dc128"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_fa711b887d374a0094e9cb699de"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_e5d2ed696b1fcb77bb6e0eb0a66"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_ccbcf31775c029a912a5d3c8d06"`);
        await queryRunner.query(`ALTER TABLE "system"."group" DROP CONSTRAINT "FK_24cb014529a631a05e7ec236274"`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" DROP CONSTRAINT "FK_520a58655864c5f6f0cce75422b"`);
        await queryRunner.query(`ALTER TABLE "system"."user" DROP CONSTRAINT "FK_9b4acca00abebb4c580fc6fbf7b"`);
        await queryRunner.query(`ALTER TABLE "system"."acl" DROP CONSTRAINT "FK_5d59302fdf0e63c2efb13ed874b"`);
        await queryRunner.query(`ALTER TABLE "system"."acl" DROP CONSTRAINT "FK_6f4a31f5ecccf5d16864b7bb0b0"`);
        await queryRunner.query(`ALTER TABLE "system"."dictionary" DROP CONSTRAINT "FK_670d3af073508aafd2958a5257e"`);
        await queryRunner.query(`ALTER TABLE "system"."dictionary" DROP CONSTRAINT "FK_e7a6ac85ff6ddc2c6c2fb868c3d"`);
        await queryRunner.query(`ALTER TABLE "system"."field_label" DROP CONSTRAINT "FK_6d402a8c214ca82f50806bf47d2"`);
        await queryRunner.query(`ALTER TABLE "system"."field_label" DROP CONSTRAINT "FK_67ee6cad272ef0709bd9ea744db"`);
        await queryRunner.query(`ALTER TABLE "core"."department" DROP CONSTRAINT "FK_4480f5a6a32bf896a705763c33f"`);
        await queryRunner.query(`ALTER TABLE "core"."department" DROP CONSTRAINT "FK_535f12599ac55d043d7b4253c78"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_79981067ab626c4987ef34e608"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_bcb21d907b99a7005553f508bb"`);
        await queryRunner.query(`DROP TABLE "system"."ui_action_requires_role"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_8c03f4535db932e0f31a215354"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_cb5e9703f9d9cf94b47e7f9fdf"`);
        await queryRunner.query(`DROP TABLE "system"."group_contains_role"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_b8c3f6ef73bff7165ef1438394"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_d9ae43821a1309a05fb2cc312e"`);
        await queryRunner.query(`DROP TABLE "system"."group_membership"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_b784423b727a21f99184ad1087"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_59a93e06bac9758f039e11745c"`);
        await queryRunner.query(`DROP TABLE "system"."user_has_role"`);
        await queryRunner.query(`DROP TABLE "system"."ui_action"`);
        await queryRunner.query(`DROP TABLE "system"."server_script"`);
        await queryRunner.query(`DROP TABLE "itsm"."task_sla"`);
        await queryRunner.query(`DROP TABLE "itsm"."sla_definition"`);
        await queryRunner.query(`DROP TABLE "core"."task"`);
        await queryRunner.query(`DROP TABLE "system"."group"`);
        await queryRunner.query(`DROP TABLE "core"."cost_centre"`);
        await queryRunner.query(`DROP TABLE "system"."user"`);
        await queryRunner.query(`DROP TABLE "system"."role"`);
        await queryRunner.query(`DROP TABLE "system"."acl"`);
        await queryRunner.query(`DROP TABLE "system"."dbo"`);
        await queryRunner.query(`DROP TABLE "system"."dictionary"`);
        await queryRunner.query(`DROP TABLE "system"."field_label"`);
        await queryRunner.query(`DROP TABLE "core"."department"`);
        await queryRunner.query(`DROP TABLE "core"."company"`);
    }

}
