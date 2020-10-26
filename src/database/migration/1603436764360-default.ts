import {MigrationInterface, QueryRunner} from "typeorm";

export class default1603436764360 implements MigrationInterface {
    name = 'default1603436764360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_d6bd18732897608eb7645547908"`);
        await queryRunner.query(`ALTER TABLE "itsm"."change" DROP CONSTRAINT "FK_8263101ac5df5472dd85dd72ba0"`);
        await queryRunner.query(`ALTER TABLE "itsm"."change_task" DROP CONSTRAINT "FK_8ac583c7179d4a7add478788714"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP CONSTRAINT "FK_fbe43859675e11d00ce02fc641b"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident_task" DROP CONSTRAINT "FK_281b7e330fee99c5fa442288886"`);
        await queryRunner.query(`CREATE TABLE "cmdb"."ci" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" character varying(255) NOT NULL, "comments" text NOT NULL DEFAULT '', "environment" character varying NOT NULL, "companyGuid" uuid, "supportGroupGuid" uuid, "primaryOwnerGuid" uuid, CONSTRAINT "PK_f7b0c5e8f2972ed77642226895e" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "cmdb"."hw" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" character varying(255) NOT NULL, "comments" text NOT NULL DEFAULT '', "environment" character varying NOT NULL, "serial_number" character varying(255) NOT NULL, "companyGuid" uuid, "supportGroupGuid" uuid, "primaryOwnerGuid" uuid, "manufacturerGuid" uuid, CONSTRAINT "PK_d095fba87ceb56c97eb280cc670" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "cmdb"."hw_computer" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" character varying(255) NOT NULL, "comments" text NOT NULL DEFAULT '', "environment" character varying NOT NULL, "serial_number" character varying(255) NOT NULL, "os" text, "companyGuid" uuid, "supportGroupGuid" uuid, "primaryOwnerGuid" uuid, "manufacturerGuid" uuid, CONSTRAINT "PK_3b5516ea35886372963cfa696e9" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."location" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" character varying(40) NOT NULL, "updated_by" character varying(40) NOT NULL, "class_name" character varying(80) NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_02cdd6eb9deca8bc381da3f77ff" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD "priority" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."change" ADD "priority" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."change_task" ADD "priority" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD "priority" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD "impact" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD "urgency" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD "scope" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident_task" ADD "priority" integer NOT NULL DEFAULT 4`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" ADD "slaDefinitionGuid" uuid`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_3d365d2c1a68bf65d6cec76f8ae" FOREIGN KEY ("companyGuid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_5c4635ce265455db30fd6f1bd16" FOREIGN KEY ("supportGroupGuid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_58489cd210bee88e92abe5a48ef" FOREIGN KEY ("primaryOwnerGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" ADD CONSTRAINT "FK_74fb63a9b93b8838bdfba82c749" FOREIGN KEY ("companyGuid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" ADD CONSTRAINT "FK_676a930a6fe3feb75ab97a1aef3" FOREIGN KEY ("supportGroupGuid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" ADD CONSTRAINT "FK_e294c61b5a41bdb2dd06f08fbb8" FOREIGN KEY ("primaryOwnerGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" ADD CONSTRAINT "FK_61b5fe8b62237e12a13a1ecf42d" FOREIGN KEY ("manufacturerGuid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" ADD CONSTRAINT "FK_9aa4599b149f34f92d5d0a5001b" FOREIGN KEY ("companyGuid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" ADD CONSTRAINT "FK_02f63bb691dcd6a437eb17bc864" FOREIGN KEY ("supportGroupGuid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" ADD CONSTRAINT "FK_bd696de1b46809a2fc793ca9336" FOREIGN KEY ("primaryOwnerGuid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" ADD CONSTRAINT "FK_fc79aa48b1e69b494627ff57038" FOREIGN KEY ("manufacturerGuid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_d6bd18732897608eb7645547908" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."change" ADD CONSTRAINT "FK_8263101ac5df5472dd85dd72ba0" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."change_task" ADD CONSTRAINT "FK_8ac583c7179d4a7add478788714" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD CONSTRAINT "FK_fbe43859675e11d00ce02fc641b" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident_task" ADD CONSTRAINT "FK_281b7e330fee99c5fa442288886" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" ADD CONSTRAINT "FK_7de4f5ea4521c96202ec4d6002c" FOREIGN KEY ("slaDefinitionGuid") REFERENCES "itsm"."sla_definition"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" DROP CONSTRAINT "FK_7de4f5ea4521c96202ec4d6002c"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident_task" DROP CONSTRAINT "FK_281b7e330fee99c5fa442288886"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP CONSTRAINT "FK_fbe43859675e11d00ce02fc641b"`);
        await queryRunner.query(`ALTER TABLE "itsm"."change_task" DROP CONSTRAINT "FK_8ac583c7179d4a7add478788714"`);
        await queryRunner.query(`ALTER TABLE "itsm"."change" DROP CONSTRAINT "FK_8263101ac5df5472dd85dd72ba0"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_d6bd18732897608eb7645547908"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" DROP CONSTRAINT "FK_fc79aa48b1e69b494627ff57038"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" DROP CONSTRAINT "FK_bd696de1b46809a2fc793ca9336"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" DROP CONSTRAINT "FK_02f63bb691dcd6a437eb17bc864"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw_computer" DROP CONSTRAINT "FK_9aa4599b149f34f92d5d0a5001b"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" DROP CONSTRAINT "FK_61b5fe8b62237e12a13a1ecf42d"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" DROP CONSTRAINT "FK_e294c61b5a41bdb2dd06f08fbb8"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" DROP CONSTRAINT "FK_676a930a6fe3feb75ab97a1aef3"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."hw" DROP CONSTRAINT "FK_74fb63a9b93b8838bdfba82c749"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_58489cd210bee88e92abe5a48ef"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_5c4635ce265455db30fd6f1bd16"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_3d365d2c1a68bf65d6cec76f8ae"`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" DROP COLUMN "slaDefinitionGuid"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident_task" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP COLUMN "scope"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP COLUMN "urgency"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP COLUMN "impact"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "itsm"."change_task" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "itsm"."change" DROP COLUMN "priority"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP COLUMN "priority"`);
        await queryRunner.query(`DROP TABLE "core"."location"`);
        await queryRunner.query(`DROP TABLE "cmdb"."hw_computer"`);
        await queryRunner.query(`DROP TABLE "cmdb"."hw"`);
        await queryRunner.query(`DROP TABLE "cmdb"."ci"`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident_task" ADD CONSTRAINT "FK_281b7e330fee99c5fa442288886" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."cmdb_ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."incident" ADD CONSTRAINT "FK_fbe43859675e11d00ce02fc641b" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."cmdb_ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."change_task" ADD CONSTRAINT "FK_8ac583c7179d4a7add478788714" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."cmdb_ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."change" ADD CONSTRAINT "FK_8263101ac5df5472dd85dd72ba0" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."cmdb_ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_d6bd18732897608eb7645547908" FOREIGN KEY ("configItemGuid") REFERENCES "cmdb"."cmdb_ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
