import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product";

@Entity({
  name: "product_information",
})
export class ProductInformation {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    type: "decimal",
  })
  price: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: "int" })
  quantity: number;

  @OneToOne(() => Product, (product) => product.productInformation)
  product: Product;
}
