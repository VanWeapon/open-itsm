import {MigrationInterface, QueryRunner} from "typeorm";

export class scripts1600585350723 implements MigrationInterface {
    name = 'scripts1600585350723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "s_script_server" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(80) NOT NULL, "script" text NOT NULL, "when" character varying NOT NULL, "on" character varying NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_b6ce4bbfadb186259740e62acfc" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`ALTER TABLE "s_dbo" ADD CONSTRAINT "UQ_7164342b1d0f79fd98eb13644d9" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "s_user" ADD CONSTRAINT "UQ_ab843bf3f7fc4e44d480298a6c0" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "s_script_server" ADD CONSTRAINT "FK_575c312e74b1c3dbdcfa539b294" FOREIGN KEY ("tableGuid") REFERENCES "s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "s_script_server" DROP CONSTRAINT "FK_575c312e74b1c3dbdcfa539b294"`);
        await queryRunner.query(`ALTER TABLE "s_user" DROP CONSTRAINT "UQ_ab843bf3f7fc4e44d480298a6c0"`);
        await queryRunner.query(`ALTER TABLE "s_dbo" DROP CONSTRAINT "UQ_7164342b1d0f79fd98eb13644d9"`);
        await queryRunner.query(`DROP TABLE "s_script_server"`);
    }

}
