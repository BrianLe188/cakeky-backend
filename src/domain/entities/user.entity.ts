import { EStatus } from "@/shared/utils/enums";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { AuthToken } from "./auth-token.entity";
import { ContactInformation } from "./contact-information.entity";
import { Order } from "./order.entity";
import { Permission } from "./permission.entity";
import { Product } from "./product.entity";
import { Role } from "./role.entity";
import { ShopMenu } from "./shop-menu.entity";

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

    @ManyToMany(() => Permission, (permission) => permission.users, {
        cascade: true,
    })
    @JoinTable()
    permissions: Array<Permission>;

    @ManyToOne(() => Role, (role) => role.users)
    role: Role;

    @OneToMany(() => Product, (product) => product.user)
    products: Array<Product>;

    @OneToMany(() => ShopMenu, (menu) => menu.user)
    menus: Array<ShopMenu>;

    @OneToOne(() => AuthToken, (authToken) => authToken.user)
    authToken: AuthToken;

    @OneToMany(() => ContactInformation, (contact) => contact.user)
    contactInformations: Array<ContactInformation>;

    @OneToMany(() => Order, (order) => order.user)
    orders: Array<Order>;
}
