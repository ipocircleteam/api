"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Ipo Tracker",
    tableName: "ipo_tracker",
    columns: {
        id: {
            type: "int",
            primary: true
        },
        company_name: {
            type: "text",
            nullable: true
        },
        sector: {
            type: "text",
            nullable: true
        },
        issue_price: {
            type: "double precision",
            nullable: true
        },
        current_price: {
            type: "double precision",
            nullable: true
        },
        listing_price: {
            type: "double precision",
            nullable: true
        },
        dayend_price: {
            type: "double precision",
            nullable: true
        },
    },
});
