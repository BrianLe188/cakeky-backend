import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({ name: "permissions" })
export class Permission {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "boolean",
    default: false,
  })
  order: boolean;

  @Column({
    type: "boolean",
    default: false,
  })
  chat: boolean;

  @OneToOne(() => User, (user) => user.permission)
  user: User;
}
