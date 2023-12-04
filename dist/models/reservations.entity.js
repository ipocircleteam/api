"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Reservations",
    tableName: "reservations",
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
        shares_offered: {
            type: "bigint",
            nullable: true
        },
    },
});
