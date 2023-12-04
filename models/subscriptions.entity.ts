import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Subscriptions",
  tableName: "subscriptions",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    ipo_id: {
      type: "int",
      nullable: true
    },
    category: {
      type: "text",
      nullable: true
    },
    shares_bid: {
      type: "bigint",
      nullable: true
    },
    updated_at: {
      type: "timestamp",
      nullable: true
    },
  },
});
