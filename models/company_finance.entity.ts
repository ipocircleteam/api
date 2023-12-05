import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { CompanyFinance } from "../utils/types/companyFinance";

export default new EntitySchema({
  name: "Company Finances",
  tableName: "company_finances",
  columns: {
    ipo_id: {
      type: "text",
      primary: true
    },
    period_start: {
      type: "timestamp",
    },
    period_end: {
      type: "timestamp",
    },
    assets: {
      type: "double precision",
    },
    revenue: {
      type: "double precision",
    },
    profit_after_tax: {
      type: "double precision",
    },
    networth: {
      type: "double precision",
    },
    reserves: {
      type: "double precision",
    },
    borrowing: {
      type: "double precision",
    },
  },
});

// export class CompanyFinances {
//   id: string | undefined;
//   ipo_id: string | undefined;
//   period_start: Date | undefined;
//   period_end: Date | undefined;
//   assets: number | undefined;
//   revenue: number | undefined;
//   profit_after_tax: number | undefined;
//   networth: number | undefined;
//   reserves: number | undefined;
//   borrowing: number | undefined;

//   constructor() {
//     (this.id = undefined),
//       (this.ipo_id = undefined),
//       (this.period_start = undefined),
//       (this.period_end = undefined),
//       (this.assets = undefined),
//       (this.revenue = undefined),
//       (this.profit_after_tax = undefined),
//       (this.networth = undefined),
//       (this.reserves = undefined),
//       (this.borrowing = undefined);
//   }
// }
