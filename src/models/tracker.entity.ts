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
      type: "text",
      nullable: true,
    },
    current_price: {
      type: "text",
      nullable: true,
    },
    listing_price: {
      type: "text",
      nullable: true,
    },
    dayend_price: {
      type: "text",
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
  issue_price: string;
  current_price: string;
  listing_price: string;
  dayend_price: string;
  year: number;

  constructor() {
    (this.id = ""),
      (this.company_name = ""),
      (this.sector = ""),
      (this.issue_price = ''),
      (this.current_price = ''),
      (this.listing_price = ''),
      (this.dayend_price = ''),
      (this.year = 0);
  }
}
