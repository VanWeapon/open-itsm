import {MigrationInterface, QueryRunner} from "typeorm";

export class default1603439579238 implements MigrationInterface {
    name = 'default1603439579238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
