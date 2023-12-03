import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Subscriptions",
  tableName: "subscriptions",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      default: () => `'${uuidv4()}'`,
    },
    ipo_id: {
      type: "uuid",
    },
    category: {
      type: "text",
    },
    shares_bid: {
      type: "bigint",
    },
    updated_at: {
      type: "timestamp",
    },
  },
});
