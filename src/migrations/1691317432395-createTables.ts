import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1691317432395 implements MigrationInterface {
    name = 'CreateTables1691317432395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "phoneNumber" character varying(45) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "email" character varying(45) NOT NULL, "phoneNumber" character varying(45) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_c7997e228eb23f5f3931ac6701c" UNIQUE ("phoneNumber"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
