import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

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

    @ManyToMany(() => User, (user) => user.permissions)
    users: Array<User>;
}
