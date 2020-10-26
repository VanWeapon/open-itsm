import {MigrationInterface, QueryRunner} from "typeorm";

export class default1603439007826 implements MigrationInterface {
    name = 'default1603439007826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP COLUMN "scope"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD "scope" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP COLUMN "scope"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD "scope" text NOT NULL`);
    }

}
