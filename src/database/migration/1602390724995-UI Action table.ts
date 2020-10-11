import {MigrationInterface, QueryRunner} from "typeorm";

export class UIActionTable1602390724995 implements MigrationInterface {
    name = 'UIActionTable1602390724995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "system"."s_ui_action" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL, "name" character varying(255) NOT NULL, "active" boolean NOT NULL DEFAULT true, "order" integer NOT NULL DEFAULT 100, "form_button" boolean NOT NULL, "form_context" boolean NOT NULL, "form_link" boolean NOT NULL, "list_button" boolean NOT NULL, "list_context" boolean NOT NULL, "list_link" boolean NOT NULL, "client" boolean NOT NULL, "server" boolean NOT NULL, "client_script" text NOT NULL, "server_script" text NOT NULL, "tableGuid" uuid, CONSTRAINT "PK_dd5f832927b1d8c09d9d6b97f3a" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" ADD CONSTRAINT "FK_462213dfcf798b8cd27bf6bb0a4" FOREIGN KEY ("tableGuid") REFERENCES "system"."s_dbo"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."s_ui_action" DROP CONSTRAINT "FK_462213dfcf798b8cd27bf6bb0a4"`);
        await queryRunner.query(`DROP TABLE "system"."s_ui_action"`);
    }

}
