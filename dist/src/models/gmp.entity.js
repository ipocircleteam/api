"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMP = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "GMP Table",
    tableName: "gmp",
    columns: {
        ipo_id: {
            type: "text",
            primary: true,
            nullable: false,
        },
        gmp_values: {
            type: "varchar",
            nullable: true,
            transformer: {
                to(value) {
                    return JSON.stringify(value);
                },
                from(value) {
                    const data = JSON.parse(value);
                    return data;
                },
            },
        },
    },
});
class GMP {
    constructor() {
        (this.ipo_id = ""), (this.gmp_values = []);
    }
}
exports.GMP = GMP;
