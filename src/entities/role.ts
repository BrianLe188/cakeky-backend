import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { AppDataSource } from "@src/data-source";

@Entity({
  name: "roles",
})
export class Role {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    length: 10,
  })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: Array<User>;
}

export const RoleRepository = AppDataSource.getRepository(Role);
