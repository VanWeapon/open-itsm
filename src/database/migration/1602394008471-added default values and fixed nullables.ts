import {MigrationInterface, QueryRunner} from "typeorm";

export class addedDefaultValuesAndFixedNullables1602394008471 implements MigrationInterface {
    name = 'addedDefaultValuesAndFixedNullables1602394008471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ALTER COLUMN "default_value" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "form_button" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "form_context" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "form_link" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "list_button" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "list_context" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "list_link" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "client" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "server" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "client_script" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "server_script" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "server_script" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "client_script" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "server" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "client" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "list_link" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "list_context" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "list_button" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "form_link" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "form_context" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ALTER COLUMN "form_button" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ALTER COLUMN "default_value" SET NOT NULL`);
    }

}
