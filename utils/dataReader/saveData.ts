import { myDataSource } from "../../database/db";
import ipoEntity from "../../models/ipo.entity";
import lotsEntity from "../../models/lots.entity";

export default async function saveData(data: any, fileName: any) {
  try {
    
    var res;
    var results;

    if (fileName === "chittor_ipos.xlsx") {
      res = await myDataSource.getRepository(ipoEntity).create(data);
      results = await myDataSource.getRepository(ipoEntity).save(res);
    } else {
      res = await myDataSource.getRepository(lotsEntity).create(data);
      results = await myDataSource.getRepository(lotsEntity).save(res);
    }

    return results;
  } catch (error: any) {
    console.log(`Error saving data!`);
    console.log(error);
    
  }
}
