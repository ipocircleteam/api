import { DataSource } from "typeorm";
import dotenv from "dotenv";
import ipoEntity from "../models/ipo.entity";
import company_financeEntity from "../models/company_finance.entity";
import lotsEntity from "../models/lots.entity";
import reservationsEntity from "../models/reservations.entity";
import subscriptionsEntity from "../models/subscriptions.entity";
import trackerEntity from "../models/tracker.entity";
import gmpEntity from "../models/gmp.entity";
import review from "../models/review";

dotenv.config();
console.log(process.env.DB_NAME);


export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [
    ipoEntity,
    company_financeEntity,
    lotsEntity,
    reservationsEntity,
    subscriptionsEntity,
    trackerEntity,
    gmpEntity,
    review
  ],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false
  }
});

