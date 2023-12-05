"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Subscriptions",
    tableName: "subscriptions",
    columns: {
        ipo_id: {
            type: "int",
            primary: true
        },
        category: {
            type: "text",
            nullable: true
        },
        shares_bid: {
            type: "bigint",
            nullable: true
        },
        updated_at: {
            type: "timestamp",
            nullable: true
        },
    },
});
