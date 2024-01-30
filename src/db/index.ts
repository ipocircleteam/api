import { DataSource } from "typeorm";
import dotenv from "dotenv";
import ipoEntity from "../models/ipo.entity";
import company_financeEntity from "../models/company_finance.entity";
import lotsEntity from "../models/lots.entity";
import reservationsEntity from "../models/reservations.entity";
import subscriptionsEntity from "../models/subscriptions.entity";
import trackerEntity from "../models/tracker.entity";
import gmpEntity from "../models/gmp.entity";
import review from "../models/review.entity";
import user_email from "../models/users/user_email";

dotenv.config();
console.log(`${process.env.ENV} ENVIRONMENT`);


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
    review,
    user_email
  ],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function connectDb() {
  const isInitialized = await myDataSource.isInitialized;

  if (isInitialized === true) {
    console.log("DB Already initialized");

    return;
  } else {
    await myDataSource
      .initialize()
      .then(() => {
        console.log("DB Connected");
      })
      .catch((err) => {
        console.log(`Connection to db failed! Error: \n ${err}`);
        throw err;
      });
  }
}