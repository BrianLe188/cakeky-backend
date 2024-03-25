import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { User } from "./user";
import { ShopMenu } from "./shop-menu";
import { Order } from "./order";
import { Property } from "./property";

@Entity({
  name: "products",
})
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    length: 10,
  })
  name: string;

  @ManyToOne(() => ShopMenu, (menu) => menu.products)
  menu: ShopMenu;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @Column({
    type: "text",
  })
  description: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Order, (order) => order.product)
  orders: Array<Order>;

  @OneToMany(() => Property, (property) => property.product)
  properties: Array<Property>;
}
