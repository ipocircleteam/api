import { myDataSource } from "../db";
import connectDb from "../db";
import company_financeEntity, {
  CompanyFinances,
} from "../models/ipo/company_finance.entity";
import gmpEntity, { GMP } from "../models/ipo/gmp.entity";
import ipoEntity from "../models/ipo/ipo.entity";
import reviewEntity, { IpoReview } from "../models/ipo/review.entity";
import { IPO } from "../types/ipo.types";

async function generateTrackerData() {
  try {
    console.log("connecting to db...");
    await connectDb();

    const ipoList = await myDataSource.getRepository(ipoEntity).find({
      select: {
        id: true,
        name: true,
      },
    });
    console.log(ipoList.length);

    for (let i = 0; i < ipoList.length; i++) {
      try {
        //@ts-ignore
        const currIpo: IPO = ipoList[i];
        console.log("# " + currIpo.name);

        const newCompany = new CompanyFinances();
        newCompany.ipo_id = currIpo.id;
        const createCompany = await myDataSource
          .getRepository(company_financeEntity)
          .create(newCompany);
        const saveCompany = await myDataSource
          .getRepository(company_financeEntity)
          .save(createCompany);
        console.log(`+ Created Finance : ${currIpo.name}`);

        const newGmp = new GMP();
        newGmp.ipo_id = currIpo.id;
        const createGmp = await myDataSource
          .getRepository(gmpEntity)
          .create(newGmp);
        const saveGmp = await myDataSource
          .getRepository(gmpEntity)
          .save(createGmp);
        console.log(`+ Created GMP : ${currIpo.name}`);

        const newReview = new IpoReview();
        newReview.ipo_id = currIpo.id;
        const createReview = await myDataSource
          .getRepository(reviewEntity)
          .create(newReview);
        const saveReview = await myDataSource
          .getRepository(reviewEntity)
          .save(createReview);
        console.log(`+ Created Review : ${currIpo.name}`);

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
  } finally {
    process.exit(0);
  }
}

generateTrackerData();
