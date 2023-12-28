"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyFinances = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Company Finances",
    tableName: "company_finances",
    columns: {
        ipo_id: {
            type: "text",
            primary: true,
        },
        y2024: {
            type: "text",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    return JSON.parse(value);
                },
            },
        },
        y2023: {
            type: "text",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    return JSON.parse(value);
                },
            },
        },
        y2022: {
            type: "text",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    return JSON.parse(value);
                },
            },
        },
        y2021: {
            type: "text",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    return JSON.parse(value);
                },
            },
        },
        y2020: {
            type: "text",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    return JSON.parse(value);
                },
            },
        },
        y2019: {
            type: "text",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    return JSON.parse(value);
                },
            },
        },
    },
});
class CompanyFinances {
    constructor() {
        (this.ipo_id = ""),
            (this.y2019 = {
                assets: 0,
                revenue: 0,
                profit_after_tax: 0,
                networth: 0,
                reserves: 0,
                borrowing: 0,
            }),
            (this.y2020 = {
                assets: 0,
                revenue: 0,
                profit_after_tax: 0,
                networth: 0,
                reserves: 0,
                borrowing: 0,
            }),
            (this.y2021 = {
                assets: 0,
                revenue: 0,
                profit_after_tax: 0,
                networth: 0,
                reserves: 0,
                borrowing: 0,
            }),
            (this.y2022 = {
                assets: 0,
                revenue: 0,
                profit_after_tax: 0,
                networth: 0,
                reserves: 0,
                borrowing: 0,
            }),
            (this.y2023 = {
                assets: 0,
                revenue: 0,
                profit_after_tax: 0,
                networth: 0,
                reserves: 0,
                borrowing: 0,
            }),
            (this.y2024 = {
                assets: 0,
                revenue: 0,
                profit_after_tax: 0,
                networth: 0,
                reserves: 0,
                borrowing: 0,
            });
    }
}
exports.CompanyFinances = CompanyFinances;
