import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product";
import { Order } from "./order";

@Entity({
  name: "properties",
})
export class Property {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  price: string;

  @ManyToOne(() => Product, (product) => product.properties)
  product: Product;

  @ManyToMany(() => Order, (order) => order.properties)
  orders: Array<Order>;
}
