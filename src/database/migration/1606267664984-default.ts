import {MigrationInterface, QueryRunner} from "typeorm";

export class default1606267664984 implements MigrationInterface {
    name = 'default1606267664984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_4a23da06ea1d48e6f71d0f2ea6a"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_9a6bd01ff908e8987342ae00893"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_4a23da06ea1d48e6f71d0f2ea6"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_9a6bd01ff908e8987342ae0089"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "guid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "PK_10ab8cb3b4dc28fef343b845856"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "PK_c9af4ae5fb573fc5e6966128da6" PRIMARY KEY ("user_guid", "role_guid", "guid")`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "created_by" text NOT NULL DEFAULT 'system'`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "updated_by" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "class_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "scope" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "update_count" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD "active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ALTER COLUMN "role_guid" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "system"."user_has_role"."role_guid" IS NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "PK_c9af4ae5fb573fc5e6966128da6"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "PK_686b861bf4e944bd05d15761b02" PRIMARY KEY ("user_guid", "guid")`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ALTER COLUMN "user_guid" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "system"."user_has_role"."user_guid" IS NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "PK_686b861bf4e944bd05d15761b02"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "PK_dcd8d92902d890b5e86760bdae6" PRIMARY KEY ("guid")`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_9a6bd01ff908e8987342ae00893" FOREIGN KEY ("role_guid") REFERENCES "system"."role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_4a23da06ea1d48e6f71d0f2ea6a" FOREIGN KEY ("user_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_4a23da06ea1d48e6f71d0f2ea6a"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_9a6bd01ff908e8987342ae00893"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "PK_dcd8d92902d890b5e86760bdae6"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "PK_686b861bf4e944bd05d15761b02" PRIMARY KEY ("user_guid", "guid")`);
        await queryRunner.query(`COMMENT ON COLUMN "system"."user_has_role"."user_guid" IS NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ALTER COLUMN "user_guid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "PK_686b861bf4e944bd05d15761b02"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "PK_c9af4ae5fb573fc5e6966128da6" PRIMARY KEY ("user_guid", "role_guid", "guid")`);
        await queryRunner.query(`COMMENT ON COLUMN "system"."user_has_role"."role_guid" IS NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ALTER COLUMN "role_guid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "update_count"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "scope"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "class_name"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "updated_by"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "created_by"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "PK_c9af4ae5fb573fc5e6966128da6"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "PK_10ab8cb3b4dc28fef343b845856" PRIMARY KEY ("user_guid", "role_guid")`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP COLUMN "guid"`);
        await queryRunner.query(`CREATE INDEX "IDX_9a6bd01ff908e8987342ae0089" ON "system"."user_has_role" ("role_guid") `);
        await queryRunner.query(`CREATE INDEX "IDX_4a23da06ea1d48e6f71d0f2ea6" ON "system"."user_has_role" ("user_guid") `);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_9a6bd01ff908e8987342ae00893" FOREIGN KEY ("role_guid") REFERENCES "system"."role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_4a23da06ea1d48e6f71d0f2ea6a" FOREIGN KEY ("user_guid") REFERENCES "system"."user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
