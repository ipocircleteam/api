import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "IPO Reviews",
  tableName: "ipo_reviews",
  columns: {
    ipo_id: {
      type: "text",
      primary: true,
      nullable: false,
    },
    review: {
      type: "text",
      nullable: true,
    },
  },
});

export class IpoReview {
  ipo_id: string;
  review: string;

  constructor() {
    (this.ipo_id = ""), (this.review = "");
  }
}
