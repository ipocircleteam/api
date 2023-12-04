"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Company Finances",
    tableName: "company_finances",
    columns: {
        id: {
            primary: true,
            type: "int",
        },
        ipo_id: {
            type: "int",
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
