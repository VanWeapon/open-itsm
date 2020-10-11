import {MigrationInterface, QueryRunner} from "typeorm";

export class minorUpdates1602400532179 implements MigrationInterface {
    name = 'minorUpdates1602400532179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "system"."s_ui_action_requires_role" ("sUiActionGuid" uuid NOT NULL, "sRoleGuid" uuid NOT NULL, CONSTRAINT "PK_a6322a7de708c1388d66384e56b" PRIMARY KEY ("sUiActionGuid", "sRoleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0688ea5f02594597fcb743bd15" ON "system"."s_ui_action_requires_role" ("sUiActionGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_49792967c7decbd9f83bddc126" ON "system"."s_ui_action_requires_role" ("sRoleGuid") `);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" ADD "operation" character varying(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ADD "global" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ADD "description" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ADD "tooltip" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action_requires_role" ADD CONSTRAINT "FK_0688ea5f02594597fcb743bd152" FOREIGN KEY ("sUiActionGuid") REFERENCES "system"."s_ui_action"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action_requires_role" ADD CONSTRAINT "FK_49792967c7decbd9f83bddc126b" FOREIGN KEY ("sRoleGuid") REFERENCES "system"."s_role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action_requires_role" DROP CONSTRAINT "FK_49792967c7decbd9f83bddc126b"`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action_requires_role" DROP CONSTRAINT "FK_0688ea5f02594597fcb743bd152"`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" DROP COLUMN "tooltip"`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" DROP COLUMN "global"`);
        await queryRunner.query(`ALTER TABLE "system"."s_acl" DROP COLUMN "operation"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_49792967c7decbd9f83bddc126"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_0688ea5f02594597fcb743bd15"`);
        await queryRunner.query(`DROP TABLE "system"."s_ui_action_requires_role"`);
    }

}
