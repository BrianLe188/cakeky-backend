import { DataSource } from "typeorm";
import {
  User,
  Permission,
  Role,
  AuthToken,
  Category,
  Product,
  ShopMenu,
  ContactInformation,
  PaymentMethod,
  Order,
  Property,
} from "./entities";
import { databaseConfig } from "./configs";

export const AppDataSource = new DataSource({
  type: databaseConfig.type,
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  synchronize: true,
  logging: true,
  entities: [
    User,
    Permission,
    Role,
    Product,
    Category,
    ShopMenu,
    AuthToken,
    ContactInformation,
    PaymentMethod,
    Order,
    Property,
  ],
  subscribers: [],
  migrations: [],
});
