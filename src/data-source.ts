import { DataSource } from "typeorm";
import { User, Permission, Role } from "./entities";
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
  entities: [User, Permission, Role],
  subscribers: [],
  migrations: [],
});
