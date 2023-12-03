"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
exports.default = new typeorm_1.EntitySchema({
    name: "Ipo Lots",
    tableName: "ipo_lots",
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
        lots_min: {
            type: "bigint",
        },
        lots_max: {
            type: "bigint",
        },
    },
});
