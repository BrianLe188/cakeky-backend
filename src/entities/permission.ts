import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
