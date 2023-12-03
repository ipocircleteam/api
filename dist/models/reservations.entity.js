"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
exports.default = new typeorm_1.EntitySchema({
    name: "Reservations",
    tableName: "reservations",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            default: () => `'${(0, uuid_1.v4)()}'`,
        },
        ipo_id: {
            type: "uuid",
        },
        category: {
            type: "text",
        },
        shares_offered: {
            type: "bigint",
        },
    },
});
