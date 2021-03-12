import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ClientEntites } from "./Client.entites";
import { SharedProp } from "./sharedProp";

export type UserType = "user" | "admin";

@Entity()
export class UserEntites extends SharedProp {
  constructor(user: string, email: string, password: string, type?: UserType) {
    super();
    this.user = user;
    this.password = password;
    this.email = email;
    this.type = type;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "user", nullable: false, unique: true })
  user: string;

  @Column({ name: "password", nullable: false })
  password: string;

  @Column({ name: "email", nullable: false, unique: true })
  email: string;

  @Column({ default: "user" })
  type: UserType;

  @OneToOne(() => ClientEntites)
  @JoinColumn()
  client: ClientEntites;
}
