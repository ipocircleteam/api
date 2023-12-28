"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpoReview = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
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
class IpoReview {
    constructor() {
        (this.ipo_id = ""), (this.review = "");
    }
}
exports.IpoReview = IpoReview;
