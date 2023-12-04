import { myDataSource } from "../database/db";
import initDb from "../database/initDb";
import ipoEntity from "../models/ipo.entity";
import trackerEntity from "../models/tracker.entity";
import { TrackerClass } from "../models/tracker.entity";
import { IPO } from "../utils/types/ipo";
import { createConnection } from "typeorm";

async function generateTrackerData() {
  try {
    console.log("connecting to db...");
    await initDb();

    const ipoList = await myDataSource.getRepository(ipoEntity).find({
      select: {
        name: true,
        closing_date: true,
        id: true,
      },
    });
    console.log(ipoList.length);

    for (let i = 0; i < ipoList.length; i++) {
      try {
        const data = new TrackerClass();
        //@ts-ignore
        const currIpo: IPO = ipoList[i];

        data.id = currIpo.id;
        data.company_name = currIpo.name;
        data.current_price = 0;
        data.dayend_price = 0;
        data.issue_price = 0;
        data.listing_price = 0;
        data.sector = "";
        data.year =
          currIpo.closing_date === null
            ? 0
            : currIpo.closing_date.getFullYear();

        const res = await myDataSource
          .getRepository(trackerEntity)
          .create(data);
        const results = await myDataSource
          .getRepository(trackerEntity)
          .save(res);

        console.log("+ " + currIpo.name);
        console.log(`>>> ${JSON.stringify(results)}`);
        console.log();
      } catch (error: any) {
        console.log(error);
        throw Error(error);
        process.exit(0);
      }
    }

    console.log("Data Extracted Successfully");
  } catch (error: any) {
    console.log(error);
  }
}

generateTrackerData();
