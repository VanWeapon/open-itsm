import {MigrationInterface, QueryRunner} from "typeorm";

export class init1606266732178 implements MigrationInterface {
    name = 'init1606266732178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "system"."field_label" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "label" text, "table" text NOT NULL, "element_guid" uuid NOT NULL, CONSTRAINT "PK_71e8dd10df17990f660cb60560e" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."dictionary" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "primary" boolean NOT NULL DEFAULT false, "read_only" boolean NOT NULL DEFAULT false, "mandatory" boolean NOT NULL DEFAULT false, "display" boolean NOT NULL DEFAULT false, "column_name" text NOT NULL, "column_label" text NOT NULL, "table" text NOT NULL, "type" text NOT NULL, "reference_table" text, "max_length" integer NOT NULL DEFAULT 255, "default_value" text, CONSTRAINT "PK_a154bab24262c7b859e87d18c34" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."server_script" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "script" text NOT NULL, "when" text NOT NULL, "on" text NOT NULL, "table" text NOT NULL, "order" integer NOT NULL, CONSTRAINT "PK_37634d2bd85d3a7cfb7d2713c71" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."dbo" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "label" text NOT NULL, "extends" text, "extends_root" text, "autonumber" boolean NOT NULL DEFAULT false, "number_prefix" text, "number_digits" integer, "table_scope" text NOT NULL DEFAULT 'system', CONSTRAINT "UQ_22f9b3b0c6d10fb0093a7e3b18f" UNIQUE ("name"), CONSTRAINT "PK_ddf14391fda1e6d3dac4f563535" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."company" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "description" text NOT NULL DEFAULT '', CONSTRAINT "PK_3700606e0851525b59edd40068b" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, CONSTRAINT "PK_1ec12177b9098885b982f2f7bd1" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."group_contains_role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "group_guid" uuid, "role_guid" uuid, CONSTRAINT "PK_6dac9412cd95bd6cf94b1956f31" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."department" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "description" text NOT NULL DEFAULT '', "department_head_guid" uuid, "company_guid" uuid, CONSTRAINT "PK_64cc30595cc3b9f9d721c4eb1fb" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."user" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "user_name" text NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, "email" text, "name" text NOT NULL, "department_guid" uuid, "company_guid" uuid, CONSTRAINT "UQ_368fd20c10764c99e257662e13c" UNIQUE ("user_name"), CONSTRAINT "PK_421be1c35df3ec77ae5d15f73fc" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."group_membership" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "group_guid" uuid, "user_guid" uuid, CONSTRAINT "PK_3571d196e75af03ab73539d44a5" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."group" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "description" text, "manager_guid" uuid, CONSTRAINT "PK_57a8a795270b3d834546a26864c" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "cmdb"."ci" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "comments" text NOT NULL DEFAULT '', "environment" text NOT NULL DEFAULT 'production', "serial_number" text DEFAULT '', "os" text, "company_guid" uuid, "support_group_guid" uuid, "primary_owner_guid" uuid, "vendor_guid" uuid, "manufacturer_guid" uuid, CONSTRAINT "PK_f7b0c5e8f2972ed77642226895e" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_81f4e90e3bfc19c28534694fce" ON "cmdb"."ci" ("class_name") `);
        await queryRunner.query(`CREATE TABLE "core"."cost_centre" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "description" text NOT NULL DEFAULT '', "code" text NOT NULL, "centre_head_guid" uuid, "department_guid" uuid, CONSTRAINT "PK_8c465c5b6a1be3d10e993f54cf2" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."location" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_02cdd6eb9deca8bc381da3f77ff" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "core"."task" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "summary" text NOT NULL DEFAULT '', "details" text NOT NULL DEFAULT '', "priority" integer NOT NULL DEFAULT 4, "assignee_guid" uuid, "assignment_group_guid" uuid, "authorised_contact_guid" uuid, CONSTRAINT "PK_3347d13ab9755b8058b72b4a7b5" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "itsm"."itsm_task" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "summary" text NOT NULL DEFAULT '', "details" text NOT NULL DEFAULT '', "priority" integer NOT NULL DEFAULT 4, "planned_start" date, "planned_finish" date, "justification" text DEFAULT '', "implementation_plan" text DEFAULT '', "backout_plan" text DEFAULT '', "test_plan" text DEFAULT '', "risk_analysis" text DEFAULT '', "impact" integer DEFAULT 4, "urgency" integer DEFAULT 4, "assignee_guid" uuid, "assignment_group_guid" uuid, "authorised_contact_guid" uuid, "parent_task_guid" uuid, "config_item_guid" uuid, "parent_change_guid" uuid, "parent_incident_guid" uuid, CONSTRAINT "PK_dbbfdd2dcb333a7697080fb1d1b" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d5652aba78280f64f28843092b" ON "itsm"."itsm_task" ("class_name") `);
        await queryRunner.query(`CREATE TABLE "itsm"."sla_definition" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, CONSTRAINT "PK_c3dfd7820faede2783c09c30e2d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "itsm"."task_sla" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "sla_definition_guid" uuid, CONSTRAINT "PK_8f53f0622602db730b8e999091a" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."acl_requires_role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "acl_guid" uuid, "role_guid" uuid, CONSTRAINT "PK_b72c2b9a222e86ed61305688c69" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."acl" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "table" text NOT NULL, "type" text NOT NULL, "operation" text NOT NULL, "field_guid" uuid, CONSTRAINT "PK_4bf88b969c77e4606d6a3ad596c" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."event" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "description" text NOT NULL, "table" text, CONSTRAINT "PK_e7d9ae883cf3a1a444721a29ca5" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."event_action" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "event_name" text NOT NULL, "script" text NOT NULL, CONSTRAINT "PK_8932069cb78487df985a686db24" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TYPE "system"."event_queue_entry_status_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "system"."event_queue_entry" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "status" "system"."event_queue_entry_status_enum" NOT NULL DEFAULT '0', "message" text NOT NULL DEFAULT '', "parameters" json, "record" uuid, "event_guid" uuid, CONSTRAINT "PK_4785c9cca357d1ff025dfadc0d7" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."ui_action" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "table" text NOT NULL DEFAULT 'global', "global" boolean NOT NULL DEFAULT false, "order" integer NOT NULL DEFAULT 100, "description" text NOT NULL DEFAULT '', "tooltip" text NOT NULL DEFAULT '', "form_button" boolean NOT NULL DEFAULT false, "form_context" boolean NOT NULL DEFAULT false, "form_link" boolean NOT NULL DEFAULT false, "list_button" boolean NOT NULL DEFAULT false, "list_context" boolean NOT NULL DEFAULT false, "list_link" boolean NOT NULL DEFAULT false, "client" boolean NOT NULL DEFAULT false, "server" boolean NOT NULL DEFAULT false, "client_script" text NOT NULL DEFAULT '', "server_script" text NOT NULL DEFAULT '', CONSTRAINT "PK_27fcb90fe72c12cc9a2a65a29dc" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."ui_action_requires_role" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "ui_action_guid" uuid, "role_guid" uuid, CONSTRAINT "PK_f59dfade80bad4a9418140e4ac3" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."script_library" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "created_by" text NOT NULL DEFAULT 'system', "updated_by" text NOT NULL, "class_name" text NOT NULL, "scope" text NOT NULL, "update_count" integer NOT NULL DEFAULT 0, "active" boolean NOT NULL DEFAULT true, "name" text NOT NULL, "script" text NOT NULL, "description" text NOT NULL DEFAULT '', CONSTRAINT "PK_45830ddebbf0e46c48d71a97275" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system"."user_has_role" ("user_guid" uuid NOT NULL, "role_guid" uuid NOT NULL, CONSTRAINT "PK_10ab8cb3b4dc28fef343b845856" PRIMARY KEY ("user_guid", "role_guid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4a23da06ea1d48e6f71d0f2ea6" ON "system"."user_has_role" ("user_guid") `);
        await queryRunner.query(`CREATE INDEX "IDX_9a6bd01ff908e8987342ae0089" ON "system"."user_has_role" ("role_guid") `);
        await queryRunner.query(`ALTER TABLE "system"."field_label" ADD CONSTRAINT "FK_972afd090ceb37d4f4197d02af0" FOREIGN KEY ("element_guid") REFERENCES "system"."dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" ADD CONSTRAINT "FK_f726259b83976ec2db406e6d518" FOREIGN KEY ("group_guid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" ADD CONSTRAINT "FK_f0cc0131b028dbca5ce5a80d5c1" FOREIGN KEY ("role_guid") REFERENCES "system"."role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."department" ADD CONSTRAINT "FK_1f820ebc41a1d3d0d1eebd6586f" FOREIGN KEY ("department_head_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."department" ADD CONSTRAINT "FK_3762911313c18507b4f1e011eb5" FOREIGN KEY ("company_guid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user" ADD CONSTRAINT "FK_68a49618fb1128fa62d10105dee" FOREIGN KEY ("department_guid") REFERENCES "core"."department"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user" ADD CONSTRAINT "FK_3656a9fe0fafa77de8abb88a587" FOREIGN KEY ("company_guid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" ADD CONSTRAINT "FK_8c8031af5d9e7c03e075d441bd9" FOREIGN KEY ("group_guid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" ADD CONSTRAINT "FK_e3949dd0f9c5a2a488360240b2c" FOREIGN KEY ("user_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."group" ADD CONSTRAINT "FK_d501900929a2854a769a7a6aa2d" FOREIGN KEY ("manager_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_301f520af110c9f9d5f7cbc8699" FOREIGN KEY ("company_guid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_5c7275c462f1912e2841184d6c6" FOREIGN KEY ("support_group_guid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_1427821b797eee7e554f20b3cf8" FOREIGN KEY ("primary_owner_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_75f670cfd71259d6bc58de560bf" FOREIGN KEY ("vendor_guid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" ADD CONSTRAINT "FK_8b87ccce4f794ae0873a667a7e5" FOREIGN KEY ("manufacturer_guid") REFERENCES "core"."company"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ADD CONSTRAINT "FK_e1e52fc5903f10310ce54a9cee5" FOREIGN KEY ("centre_head_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" ADD CONSTRAINT "FK_78ce7fdb74c1acb9c65b91af12c" FOREIGN KEY ("department_guid") REFERENCES "core"."department"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_58b9e6c0059e54f2f5b94444b67" FOREIGN KEY ("assignee_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_46bfcaa6a1afa02d110c448e173" FOREIGN KEY ("assignment_group_guid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "core"."task" ADD CONSTRAINT "FK_0b10dd25c6fac4e4ff3ff53a26e" FOREIGN KEY ("authorised_contact_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_e71429d88e14771c1ed4b9a7ac7" FOREIGN KEY ("assignee_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_443e8fee42b18b5037550ad912a" FOREIGN KEY ("assignment_group_guid") REFERENCES "system"."group"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_a927d898e141fff3de38ad46ce3" FOREIGN KEY ("authorised_contact_guid") REFERENCES "system"."user"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_009c23d0b4db00575a89924d606" FOREIGN KEY ("parent_task_guid") REFERENCES "itsm"."itsm_task"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_644d14cfa64ba947ff5b6f4fea2" FOREIGN KEY ("config_item_guid") REFERENCES "cmdb"."ci"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_7e1e206ec636bb1acd0fe6fecb9" FOREIGN KEY ("parent_change_guid") REFERENCES "itsm"."itsm_task"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" ADD CONSTRAINT "FK_f54ac98c345660f8941e8e2d0e3" FOREIGN KEY ("parent_incident_guid") REFERENCES "itsm"."itsm_task"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" ADD CONSTRAINT "FK_1e985b668fdbaa047ba341b2620" FOREIGN KEY ("sla_definition_guid") REFERENCES "itsm"."sla_definition"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" ADD CONSTRAINT "FK_63cc13a3fdb74114a41f648314f" FOREIGN KEY ("acl_guid") REFERENCES "system"."acl"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" ADD CONSTRAINT "FK_1d8af89ce50a22c2219da40ee55" FOREIGN KEY ("role_guid") REFERENCES "system"."role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."acl" ADD CONSTRAINT "FK_ec93f7371f73e194792db5ef559" FOREIGN KEY ("field_guid") REFERENCES "system"."dictionary"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."event_queue_entry" ADD CONSTRAINT "FK_8297c377cf4561007b601b10fe7" FOREIGN KEY ("event_guid") REFERENCES "system"."event"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" ADD CONSTRAINT "FK_e1825a32789a679595d6e60445e" FOREIGN KEY ("ui_action_guid") REFERENCES "system"."ui_action"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" ADD CONSTRAINT "FK_41a5fc23f26d809961aace686e0" FOREIGN KEY ("role_guid") REFERENCES "system"."role"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_4a23da06ea1d48e6f71d0f2ea6a" FOREIGN KEY ("user_guid") REFERENCES "system"."user"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" ADD CONSTRAINT "FK_9a6bd01ff908e8987342ae00893" FOREIGN KEY ("role_guid") REFERENCES "system"."role"("guid") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_9a6bd01ff908e8987342ae00893"`);
        await queryRunner.query(`ALTER TABLE "system"."user_has_role" DROP CONSTRAINT "FK_4a23da06ea1d48e6f71d0f2ea6a"`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" DROP CONSTRAINT "FK_41a5fc23f26d809961aace686e0"`);
        await queryRunner.query(`ALTER TABLE "system"."ui_action_requires_role" DROP CONSTRAINT "FK_e1825a32789a679595d6e60445e"`);
        await queryRunner.query(`ALTER TABLE "system"."event_queue_entry" DROP CONSTRAINT "FK_8297c377cf4561007b601b10fe7"`);
        await queryRunner.query(`ALTER TABLE "system"."acl" DROP CONSTRAINT "FK_ec93f7371f73e194792db5ef559"`);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" DROP CONSTRAINT "FK_1d8af89ce50a22c2219da40ee55"`);
        await queryRunner.query(`ALTER TABLE "system"."acl_requires_role" DROP CONSTRAINT "FK_63cc13a3fdb74114a41f648314f"`);
        await queryRunner.query(`ALTER TABLE "itsm"."task_sla" DROP CONSTRAINT "FK_1e985b668fdbaa047ba341b2620"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_f54ac98c345660f8941e8e2d0e3"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_7e1e206ec636bb1acd0fe6fecb9"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_644d14cfa64ba947ff5b6f4fea2"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_009c23d0b4db00575a89924d606"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_a927d898e141fff3de38ad46ce3"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_443e8fee42b18b5037550ad912a"`);
        await queryRunner.query(`ALTER TABLE "itsm"."itsm_task" DROP CONSTRAINT "FK_e71429d88e14771c1ed4b9a7ac7"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_0b10dd25c6fac4e4ff3ff53a26e"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_46bfcaa6a1afa02d110c448e173"`);
        await queryRunner.query(`ALTER TABLE "core"."task" DROP CONSTRAINT "FK_58b9e6c0059e54f2f5b94444b67"`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" DROP CONSTRAINT "FK_78ce7fdb74c1acb9c65b91af12c"`);
        await queryRunner.query(`ALTER TABLE "core"."cost_centre" DROP CONSTRAINT "FK_e1e52fc5903f10310ce54a9cee5"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_8b87ccce4f794ae0873a667a7e5"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_75f670cfd71259d6bc58de560bf"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_1427821b797eee7e554f20b3cf8"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_5c7275c462f1912e2841184d6c6"`);
        await queryRunner.query(`ALTER TABLE "cmdb"."ci" DROP CONSTRAINT "FK_301f520af110c9f9d5f7cbc8699"`);
        await queryRunner.query(`ALTER TABLE "system"."group" DROP CONSTRAINT "FK_d501900929a2854a769a7a6aa2d"`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" DROP CONSTRAINT "FK_e3949dd0f9c5a2a488360240b2c"`);
        await queryRunner.query(`ALTER TABLE "system"."group_membership" DROP CONSTRAINT "FK_8c8031af5d9e7c03e075d441bd9"`);
        await queryRunner.query(`ALTER TABLE "system"."user" DROP CONSTRAINT "FK_3656a9fe0fafa77de8abb88a587"`);
        await queryRunner.query(`ALTER TABLE "system"."user" DROP CONSTRAINT "FK_68a49618fb1128fa62d10105dee"`);
        await queryRunner.query(`ALTER TABLE "core"."department" DROP CONSTRAINT "FK_3762911313c18507b4f1e011eb5"`);
        await queryRunner.query(`ALTER TABLE "core"."department" DROP CONSTRAINT "FK_1f820ebc41a1d3d0d1eebd6586f"`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" DROP CONSTRAINT "FK_f0cc0131b028dbca5ce5a80d5c1"`);
        await queryRunner.query(`ALTER TABLE "system"."group_contains_role" DROP CONSTRAINT "FK_f726259b83976ec2db406e6d518"`);
        await queryRunner.query(`ALTER TABLE "system"."field_label" DROP CONSTRAINT "FK_972afd090ceb37d4f4197d02af0"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_9a6bd01ff908e8987342ae0089"`);
        await queryRunner.query(`DROP INDEX "system"."IDX_4a23da06ea1d48e6f71d0f2ea6"`);
        await queryRunner.query(`DROP TABLE "system"."user_has_role"`);
        await queryRunner.query(`DROP TABLE "system"."script_library"`);
        await queryRunner.query(`DROP TABLE "system"."ui_action_requires_role"`);
        await queryRunner.query(`DROP TABLE "system"."ui_action"`);
        await queryRunner.query(`DROP TABLE "system"."event_queue_entry"`);
        await queryRunner.query(`DROP TYPE "system"."event_queue_entry_status_enum"`);
        await queryRunner.query(`DROP TABLE "system"."event_action"`);
        await queryRunner.query(`DROP TABLE "system"."event"`);
        await queryRunner.query(`DROP TABLE "system"."acl"`);
        await queryRunner.query(`DROP TABLE "system"."acl_requires_role"`);
        await queryRunner.query(`DROP TABLE "itsm"."task_sla"`);
        await queryRunner.query(`DROP TABLE "itsm"."sla_definition"`);
        await queryRunner.query(`DROP INDEX "itsm"."IDX_d5652aba78280f64f28843092b"`);
        await queryRunner.query(`DROP TABLE "itsm"."itsm_task"`);
        await queryRunner.query(`DROP TABLE "core"."task"`);
        await queryRunner.query(`DROP TABLE "core"."location"`);
        await queryRunner.query(`DROP TABLE "core"."cost_centre"`);
        await queryRunner.query(`DROP INDEX "cmdb"."IDX_81f4e90e3bfc19c28534694fce"`);
        await queryRunner.query(`DROP TABLE "cmdb"."ci"`);
        await queryRunner.query(`DROP TABLE "system"."group"`);
        await queryRunner.query(`DROP TABLE "system"."group_membership"`);
        await queryRunner.query(`DROP TABLE "system"."user"`);
        await queryRunner.query(`DROP TABLE "core"."department"`);
        await queryRunner.query(`DROP TABLE "system"."group_contains_role"`);
        await queryRunner.query(`DROP TABLE "system"."role"`);
        await queryRunner.query(`DROP TABLE "core"."company"`);
        await queryRunner.query(`DROP TABLE "system"."dbo"`);
        await queryRunner.query(`DROP TABLE "system"."server_script"`);
        await queryRunner.query(`DROP TABLE "system"."dictionary"`);
        await queryRunner.query(`DROP TABLE "system"."field_label"`);
    }

}