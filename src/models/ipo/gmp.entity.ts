import { EntitySchema } from "typeorm";
import { GMP_VALUE } from "../../types/gmp.types";

export default new EntitySchema({
  name: "GMP Table",
  tableName: "gmp",
  columns: {
    ipo_id: {
      type: "text",
      primary: true,
      nullable: false,
    },
    gmp_values: {
      type: "varchar",
      nullable: true,
      transformer: {
        to(value: GMP_VALUE) {
          return JSON.stringify(value);
        },
        from(value) {
          const data: GMP_VALUE = JSON.parse(value);
          return data;
        },
      },
    },
  },
});

export class GMP {
  ipo_id: string;
  gmp_values: GMP_VALUE[];

  constructor() {
    (this.ipo_id = ""), (this.gmp_values = []);
  }
}
