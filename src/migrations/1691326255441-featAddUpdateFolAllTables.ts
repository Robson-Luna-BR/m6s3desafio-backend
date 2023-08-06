import { MigrationInterface, QueryRunner } from "typeorm";

export class FeatAddUpdateFolAllTables1691326255441
  implements MigrationInterface
{
  name = "FeatAddUpdateFolAllTables1691326255441";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "updatedAt" date NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "updatedAt"`);
  }
}
