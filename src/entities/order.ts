import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product";
import { User } from "./user";
import { ContactInformation } from "./contact-information";
import { PaymentMethod } from "./payment-method";
import { Property } from "./property";

@Entity({
  name: "orders",
})
export class Order {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => ContactInformation, (contact) => contact.orders)
  contactInformation: ContactInformation;

  @ManyToOne(() => PaymentMethod, (payment) => payment.orders)
  paymentMethod: PaymentMethod;

  @ManyToMany(() => Property, (property) => property.orders, {
    cascade: true,
  })
  @JoinTable()
  properties: Array<Property>;
}
