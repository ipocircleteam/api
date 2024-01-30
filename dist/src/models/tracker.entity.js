"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerClass = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Ipo Tracker",
    tableName: "ipo_tracker",
    columns: {
        id: {
            type: "text",
            primary: true,
        },
        company_name: {
            type: "text",
            nullable: true,
        },
        sector: {
            type: "text",
            nullable: true,
        },
        issue_price: {
            type: "text",
            nullable: true,
        },
        current_price: {
            type: "text",
            nullable: true,
        },
        listing_price: {
            type: "text",
            nullable: true,
        },
        dayend_price: {
            type: "text",
            nullable: true,
        },
        year: {
            type: "bigint",
            nullable: true,
        },
    },
});
class TrackerClass {
    constructor() {
        (this.id = ""),
            (this.company_name = ""),
            (this.sector = ""),
            (this.issue_price = ''),
            (this.current_price = ''),
            (this.listing_price = ''),
            (this.dayend_price = ''),
            (this.year = 0);
    }
}
exports.TrackerClass = TrackerClass;
