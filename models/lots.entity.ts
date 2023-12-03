import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Ipo Lots",
  tableName: "ipo_lots",
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
    lots_min: {
      type: "bigint",
    },
    lots_max: {
      type: "bigint",
    },
  },
});
