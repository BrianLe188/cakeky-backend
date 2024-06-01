import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity({
    name: "payment_methods",
})
export class PaymentMethod {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    key: string;

    @OneToMany(() => Order, (order) => order.paymentMethod)
    orders: Array<Order>;
}
