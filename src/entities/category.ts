import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";

@Entity({
  name: "categories",
})
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    length: 10,
  })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Array<Product>;
}
