import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config()
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [],
  synchronize: true,
});


