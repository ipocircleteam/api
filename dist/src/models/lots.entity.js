"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lot = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "Ipo Lots",
    tableName: "ipo_lots",
    columns: {
        ipo_id: {
            type: "int",
            primary: true
        },
        category: {
            type: "text",
            nullable: true
        },
        lots_min: {
            type: "bigint",
            nullable: true
        },
        lots_max: {
            type: "bigint",
            nullable: true
        },
    },
});
class Lot {
    constructor() {
        (this.ipo_id = ""),
            (this.category = ""),
            (this.lots_max = 0),
            (this.lots_min = 0);
    }
}
exports.Lot = Lot;
