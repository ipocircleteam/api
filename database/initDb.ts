import { myDataSource } from "./db";

export default async function initDb() {
    await myDataSource
    .initialize()
    .then(() => {
      console.log("DB Connected via Typeorm");
    })
    .catch((err) => {
      console.log(`Error during data source initialization: ${err}`);
      throw err;
    });
  }