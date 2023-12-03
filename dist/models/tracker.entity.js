"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
exports.default = new typeorm_1.EntitySchema({
    name: "Ipo Tracker",
    tableName: "ipo_tracker",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            default: () => `'${(0, uuid_1.v4)()}'`,
        },
        company_name: {
            type: "text",
        },
        sector: {
            type: "text",
        },
        issue_price: {
            type: "double precision",
        },
        current_price: {
            type: "double precision",
        },
        listing_price: {
            type: "double precision",
        },
        dayend_price: {
            type: "double precision",
        },
    },
});
