import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Reservations",
  tableName: "reservations",
  columns: {
    ipo_id: {
      type: "text",
      primary: true,
    },
    category: {
      type: "text",
      nullable: true,
    },
    shares_offered: {
      type: "bigint",
      nullable: true,
    },
  },
});
