import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity({
    name: "auth_tokens",
})
export class AuthToken {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "text" })
    refreshToken: string;

    @OneToOne(() => User, (user) => user.authToken)
    @JoinColumn()
    user: User;
}
