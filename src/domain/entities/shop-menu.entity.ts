import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity({
    name: "shop_menus",
})
export class ShopMenu {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({
        length: 10,
    })
    name: string;

    @OneToMany(() => Product, (product) => product.menu)
    products: Array<Product>;

    @ManyToOne(() => User, (user) => user.menus)
    user: User;
}
