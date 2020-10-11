import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultValuesInUpdateCount1602392826616 implements MigrationInterface {
    name = 'defaultValuesInUpdateCount1602392826616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."company" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "core"."department" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_field_label" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_dbo" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_role" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_user" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_group" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "core"."task" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "itsm"."sla_definition" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_script_server" ALTER COLUMN "update_count" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "update_count" SET DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_script_server" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "itsm"."sla_definition" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "core"."task" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_group" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_user" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_role" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_dbo" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_field_label" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "core"."department" ALTER COLUMN "update_count" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "core"."company" ALTER COLUMN "update_count" DROP DEFAULT`);
    }

}
