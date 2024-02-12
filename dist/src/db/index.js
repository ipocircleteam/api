"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const ipo_entity_1 = __importDefault(require("../models/ipo/ipo.entity"));
const company_finance_entity_1 = __importDefault(require("../models/ipo/company_finance.entity"));
const lots_entity_1 = __importDefault(require("../models/ipo/lots.entity"));
const reservations_entity_1 = __importDefault(require("../models/ipo/reservations.entity"));
const subscriptions_entity_1 = __importDefault(require("../models/ipo/subscriptions.entity"));
const tracker_entity_1 = __importDefault(require("../models/ipo/tracker.entity"));
const gmp_entity_1 = __importDefault(require("../models/ipo/gmp.entity"));
const review_entity_1 = __importDefault(require("../models/ipo/review.entity"));
const user_email_1 = __importDefault(require("../models/users/user_email"));
dotenv_1.default.config();
console.log(`${process.env.ENV} ENVIRONMENT`);
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
        subscriptions_entity_1.default,
        tracker_entity_1.default,
        gmp_entity_1.default,
        review_entity_1.default,
        user_email_1.default,
    ],
    synchronize: true,
    ssl: {
        rejectUnauthorized: false,
    },
});
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const isInitialized = yield exports.myDataSource.isInitialized;
        if (isInitialized === true) {
            console.log("DB Already initialized");
            return;
        }
        yield exports.myDataSource
            .initialize()
            .then(() => {
            console.log("DB Connected");
        })
            .catch((err) => {
            console.log(`Connection to db failed! Error: \n ${err}`);
            throw err;
        });
    });
}
exports.default = connectDb;
