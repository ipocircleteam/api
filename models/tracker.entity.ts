import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Ipo Tracker",
  tableName: "ipo_tracker",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      default: () => `'${uuidv4()}'`,
    },
    company_name: {
      type: "text",
    },
    sector: {
      type: "text",
    },
    issue_price: {
      type: "double precision",
    },
    current_price: {
      type: "double precision",
    },
    listing_price: {
      type: "double precision",
    },
    dayend_price: {
      type: "double precision",
    },
  },
});
