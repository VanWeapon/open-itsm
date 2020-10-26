import { MigrationInterface, QueryRunner } from "typeorm";

export class inheritTest21603309550405 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE cmdb.cmdb_hw_computer inherit cmdb.cmdb_hw"
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE cmdb.cmdb_hw_computer no inherit cmdb.cmdb_hw"
		);
	}
}
