import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { User } from "./user.entity";
import { ShopMenu } from "./shop-menu.entity";
import { Order } from "./order.entity";
import { Property } from "./property.entity";
import { ProductInformation } from "./product-information.entity";

@Entity({
    name: "products",
})
export class Product {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => ShopMenu, (menu) => menu.products)
    menu: ShopMenu;

    @ManyToOne(() => User, (user) => user.products)
    user: User;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @OneToMany(() => Order, (order) => order.product)
    orders: Array<Order>;

    @OneToMany(() => Property, (property) => property.product)
    properties: Array<Property>;

    @OneToOne(
        () => ProductInformation,
        (productInformation) => productInformation.product,
    )
    @JoinColumn()
    productInformation: ProductInformation;
}
