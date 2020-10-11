import {MigrationInterface, QueryRunner} from "typeorm";

export class dictionaryTableNameToTable1602402159573 implements MigrationInterface {
    name = 'dictionaryTableNameToTable1602402159573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" DROP CONSTRAINT "FK_bead7c423ddcfb98244138df016"`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" RENAME COLUMN "tableNameGuid" TO "tableGuid"`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ADD CONSTRAINT "FK_68ed1ef67650d4bd5f5916ba24c" FOREIGN KEY ("tableGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" DROP CONSTRAINT "FK_68ed1ef67650d4bd5f5916ba24c"`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" RENAME COLUMN "tableGuid" TO "tableNameGuid"`);
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ADD CONSTRAINT "FK_bead7c423ddcfb98244138df016" FOREIGN KEY ("tableNameGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
