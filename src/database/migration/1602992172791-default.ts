import {MigrationInterface, QueryRunner} from "typeorm";

export class default1602992172791 implements MigrationInterface {
    name = 'default1602992172791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "core"."company" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "name" character varying(80) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_3700606e0851525b59edd40068b" PRIMARY KEY ("guid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "core"."company"`);
    }

}
