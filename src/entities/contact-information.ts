import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { Order } from "./order";

@Entity({
  name: "contact_informations",
})
export class ContactInformation {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @Column({ length: 10 })
  phone: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.contactInformations)
  user: User;

  @OneToMany(() => Order, (order) => order.contactInformation)
  orders: Array<Order>;
}
