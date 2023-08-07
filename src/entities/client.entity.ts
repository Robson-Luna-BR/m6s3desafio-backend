import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: "number";

  @Column({ type: "varchar", length: 60, unique: true })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 45 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt?: string | Date | null | undefined;

  @ManyToOne(() => User, (user) => user.client)
  user: User;


}

export default Client;
