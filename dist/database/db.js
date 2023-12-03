"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const ipo_entity_1 = __importDefault(require("../models/ipo.entity"));
const company_finance_entity_1 = __importDefault(require("../models/company_finance.entity"));
const lots_entity_1 = __importDefault(require("../models/lots.entity"));
const reservations_entity_1 = __importDefault(require("../models/reservations.entity"));
const subscriptions_entity_1 = __importDefault(require("../models/subscriptions.entity"));
dotenv_1.default.config();
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
console.log(process.env.DB_NAME);
exports.myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [
        ipo_entity_1.default,
        company_finance_entity_1.default,
        lots_entity_1.default,
        reservations_entity_1.default,
        subscriptions_entity_1.default
    ],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false
    }
});
