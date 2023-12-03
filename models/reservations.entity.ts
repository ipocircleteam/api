import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Reservations",
  tableName: "reservations",
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
    shares_offered: {
      type: "bigint",
    },
  },
});
