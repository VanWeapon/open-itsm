import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultDictionaryMaxLength1602405736747 implements MigrationInterface {
    name = 'defaultDictionaryMaxLength1602405736747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ALTER COLUMN "max_length" SET DEFAULT 255`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_dictionary" ALTER COLUMN "max_length" DROP DEFAULT`);
    }

}
