import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

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

  @Column()
  menuId: string;

  @Column()
  userId: string;

  @Column({
    type: "text",
  })
  description: string;

  @Column({
    length: 10,
  })
  quantity: number;

  @OneToMany(() => Category, (category) => category.products)
  categories: Array<Category>;
}
