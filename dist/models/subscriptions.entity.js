"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Subscriptions",
    tableName: "subscriptions",
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
