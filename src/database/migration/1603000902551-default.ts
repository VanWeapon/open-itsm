import {MigrationInterface, QueryRunner} from "typeorm";

export class default1603000902551 implements MigrationInterface {
    name = 'default1603000902551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "system"."acl_requires_role" ("aclGuid" uuid NOT NULL, "roleGuid" uuid NOT NULL, CONSTRAINT "PK_b7fa2c8e50232df0f97b6281b1b" PRIMARY KEY ("aclGuid", "roleGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_db7d30d9a3045ce4ea883ca437" ON "system"."acl_requires_role" ("aclGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_bd8057b89be3779df9517a2124" ON "system"."acl_requires_role" ("roleGuid") `);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" ADD CONSTRAINT "FK_db7d30d9a3045ce4ea883ca437f" FOREIGN KEY ("aclGuid") REFERENCES "system"."acl"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" ADD CONSTRAINT "FK_bd8057b89be3779df9517a2124b" FOREIGN KEY ("roleGuid") REFERENCES "system"."role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" DROP CONSTRAINT "FK_bd8057b89be3779df9517a2124b"`);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" DROP CONSTRAINT "FK_db7d30d9a3045ce4ea883ca437f"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_bd8057b89be3779df9517a2124"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_db7d30d9a3045ce4ea883ca437"`);
        await queryRunner.query(`DROP TABLE "system"."acl_requires_role"`);
    }

}
