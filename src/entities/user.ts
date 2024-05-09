import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Permission } from "./permission";
import { Role } from "./role";
import { EStatus } from "@/utils/enums";
import { Product } from "./product";
import { ShopMenu } from "./shop-menu";
import { AuthToken } from "./auth-token";
import { ContactInformation } from "./contact-information";
import { Order } from "./order";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: "text",
  })
  password: string;

  @Column({
    type: "enum",
    enum: EStatus,
    default: EStatus.ENABLED,
  })
  status: EStatus;

  @OneToOne(() => Permission, (permission) => permission.user)
  @JoinColumn()
  permission: Permission;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Product, (product) => product.user)
  products: Array<Product>;

  @OneToMany(() => ShopMenu, (menu) => menu.user)
  menus: Array<ShopMenu>;

  @OneToOne(() => AuthToken, (authToken) => authToken.user)
  authToken: AuthToken;

  @OneToMany(() => ContactInformation, (contact) => contact.user)
  contactInformations: Array<ContactInformation>;

  @OneToMany(() => Order, (order) => order.user)
  orders: Array<Order>;
}
