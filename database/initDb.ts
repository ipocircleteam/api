import { myDataSource } from "./db";

export default async function initDb() {
  console.log('initializing database ...');
  
  const isInitialized = await myDataSource.isInitialized;

  if (isInitialized === true) {
    console.log('DB Already initialized');
    
    return
  } else {
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
}
