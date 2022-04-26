import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = (port: number) => {
  return new DataSource({
    type: "mysql",
    host: "localhost",
    port: port,
    username: "root",
    password: "password",
    database: "testDb",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
};
