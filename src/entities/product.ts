import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { User } from "./user";
import { ShopMenu } from "./shop-menu";
import { Order } from "./order";
import { Property } from "./property";
import { ProductInformation } from "./product-information";

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
    (productInformation) => productInformation.product
  )
  @JoinColumn()
  productInformation: ProductInformation;
}
