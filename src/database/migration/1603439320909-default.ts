import {MigrationInterface, QueryRunner} from "typeorm";

export class default1603439320909 implements MigrationInterface {
    name = 'default1603439320909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."company" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."company" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
