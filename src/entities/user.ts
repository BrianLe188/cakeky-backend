import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EStatus } from "../utils/enums";
import { Permission } from "./permission";
import { Role } from "./role";
import { AppDataSource } from "@src/data-source";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: "text",
  })
  password: string;

  @Column({
    type: "enum",
    enum: EStatus,
    default: EStatus.ENABLED,
  })
  status: EStatus;

  @OneToOne(() => Permission)
  @JoinColumn()
  permission: Permission;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}

export const UserRepository = AppDataSource.getRepository(User);