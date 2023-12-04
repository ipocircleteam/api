import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "Reservations",
  tableName: "reservations",
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
    shares_offered: {
      type: "bigint",
      nullable: true
    },
  },
});
