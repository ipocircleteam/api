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
            type: "double precision",
            nullable: true,
        },
        current_price: {
            type: "double precision",
            nullable: true,
        },
        listing_price: {
            type: "double precision",
            nullable: true,
        },
        dayend_price: {
            type: "double precision",
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
            (this.issue_price = 0),
            (this.current_price = 0),
            (this.listing_price = 0),
            (this.dayend_price = 0),
            (this.year = 0);
    }
}
exports.TrackerClass = TrackerClass;
