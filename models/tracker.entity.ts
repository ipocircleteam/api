import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Ipo Tracker",
  tableName: "ipo_tracker",
  columns: {
    id: {
      type: "text",
      primary: true,
    },
    company_name: {
      type: "text",
      nullable: true,
    },
    sector: {
      type: "text",
      nullable: true,
    },
    issue_price: {
      type: "double precision",
      nullable: true,
    },
    current_price: {
      type: "double precision",
      nullable: true,
    },
    listing_price: {
      type: "double precision",
      nullable: true,
    },
    dayend_price: {
      type: "double precision",
      nullable: true,
    },
    year: {
      type: "bigint",
      nullable: true,
    },
  },
});

export class TrackerClass {
  id: string;
  company_name: string;
  sector: string;
  issue_price: number;
  current_price: number;
  listing_price: number;
  dayend_price: number;
  year: number;

  constructor() {
    (this.id = ""),
      (this.company_name = ""),
      (this.sector = ""),
      (this.issue_price = 0),
      (this.current_price = 0),
      (this.listing_price = 0),
      (this.dayend_price = 0),
      (this.year = 0);
  }
}
