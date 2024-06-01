import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

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
