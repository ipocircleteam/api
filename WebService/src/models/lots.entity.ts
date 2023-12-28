import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Ipo Lots",
  tableName: "ipo_lots",
  columns: {
    ipo_id: {
      type: "int",
      primary: true
    },
    category: {
      type: "text",
      nullable: true
    },
    lots_min: {
      type: "bigint",
      nullable: true
    },
    lots_max: {
      type: "bigint",
      nullable: true
    },
  },
});

export class Lot {
  ipo_id: string;
  category: string;
  lots_min: number;
  lots_max: number;

  constructor() {
      (this.ipo_id = ""),
      (this.category = ""),
      (this.lots_max = 0),
      (this.lots_min = 0);
  }
}
