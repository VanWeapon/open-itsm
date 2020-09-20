import {MigrationInterface, QueryRunner} from "typeorm";

export class referenceUpdates1600585833291 implements MigrationInterface {
    name = 'referenceUpdates1600585833291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "s_role" DROP CONSTRAINT "FK_68974f40f1c739f9798caeb45c5"`);
        await queryRunner.query(`ALTER TABLE "s_role" DROP COLUMN "includesRolesGuid"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "s_role" ADD "includesRolesGuid" uuid`);
        await queryRunner.query(`ALTER TABLE "s_role" ADD CONSTRAINT "FK_68974f40f1c739f9798caeb45c5" FOREIGN KEY ("includesRolesGuid") REFERENCES "s_role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
