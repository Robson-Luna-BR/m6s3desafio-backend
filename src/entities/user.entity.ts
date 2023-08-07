import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Client from "./client.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: "number";

  @Column({ type: "varchar", length: 60, unique: true  })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 45 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt?: string | Date | null | undefined;

  @OneToMany(() => Client, (client) => client.user)
  client: Client[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const alreadyEncripted = getRounds(this.password);

    if (!alreadyEncripted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
