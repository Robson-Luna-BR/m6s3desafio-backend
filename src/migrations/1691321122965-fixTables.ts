import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTables1691321122965 implements MigrationInterface {
  name = "FixTables1691321122965";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293"`
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "UQ_c7997e228eb23f5f3931ac6701c"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "UQ_c7997e228eb23f5f3931ac6701c" UNIQUE ("phoneNumber")`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber")`
    );
  }
}
