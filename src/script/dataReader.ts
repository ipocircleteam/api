import extractDataFrom from "./dataReader/extractFileData";
import initDb from "../db";

const main = async () => {
  try {
    console.log("connecting to db...");
    await initDb();

    const ipo = await extractDataFrom("chittor_ipos.xlsx");
    const lots = await extractDataFrom("chittor_lots.xlsx");

    console.log("$$ DATA EXTRACTION SUCCESS $$");
  } catch (error) {
    console.log("XX DATA EXTRACTION FAILED XX");
    console.log(error);
  } finally {
    process.exit(1);
  }
};

main();
