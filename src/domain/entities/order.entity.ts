import {
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";
import { ContactInformation } from "./contact-information.entity";
import { PaymentMethod } from "./payment-method.entity";
import { Property } from "./property.entity";

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
