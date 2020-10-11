import { MigrationInterface, QueryRunner } from "typeorm";

export class sDboextendsShouldNotBeMandatory1602393314170
	implements MigrationInterface {
	name = "sDbo.extendsShouldNotBeMandatory1602393314170";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "extends" DROP NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "autonumber" SET DEFAULT false`
		);
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "number_prefix" DROP NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "number_digits" DROP NOT NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "number_digits" SET NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "number_prefix" SET NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "autonumber" DROP DEFAULT`
		);
		await queryRunner.query(
			`ALTER TABLE "system"."s_dbo" ALTER COLUMN "extends" SET NOT NULL`
		);
	}
}
