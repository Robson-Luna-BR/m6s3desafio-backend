import { MigrationInterface, QueryRunner } from "typeorm";

export class FixClientTable1691331191015 implements MigrationInterface {
  name = "FixClientTable1691331191015";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`
    );
  }
}
