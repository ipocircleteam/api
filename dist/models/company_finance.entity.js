"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
exports.default = new typeorm_1.EntitySchema({
    name: "Company Finances",
    tableName: "company_finances",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            default: () => `'${(0, uuid_1.v4)()}'`,
        },
        ipo_id: {
            type: "uuid"
        },
        period_start: {
            type: "timestamp"
        },
        period_end: {
            type: "timestamp"
        },
        assets: {
            type: "double precision"
        },
        revenue: {
            type: "double precision"
        },
        profit_after_tax: {
            type: "double precision"
        },
        networth: {
            type: "double precision"
        },
        reserves: {
            type: "double precision"
        },
        borrowing: {
            type: "double precision"
        }
    }
});
