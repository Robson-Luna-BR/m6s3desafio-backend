import { MigrationInterface, QueryRunner } from "typeorm";

export class ClientUniqueName1691412024109 implements MigrationInterface {
    name = 'ClientUniqueName1691412024109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_99e921caf21faa2aab020476e44" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_99e921caf21faa2aab020476e44"`);
    }

}
