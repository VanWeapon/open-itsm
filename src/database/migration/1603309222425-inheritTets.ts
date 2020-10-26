import { MigrationInterface, QueryRunner } from "typeorm";

export class inheritTets1603309222425 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE cmdb.cmdb_hw inherit cmdb.cmdb_ci"
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE cmdb.cmdb_hw no inherit cmdb.cmdb_ci"
		);
	}
}
