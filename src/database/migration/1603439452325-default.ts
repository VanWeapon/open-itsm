import {MigrationInterface, QueryRunner} from "typeorm";

export class default1603439452325 implements MigrationInterface {
    name = 'default1603439452325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."department" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."department" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
