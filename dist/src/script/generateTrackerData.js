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
const db_1 = require("../db");
const db_2 = __importDefault(require("../db"));
const ipo_entity_1 = __importDefault(require("../models/ipo/ipo.entity"));
const tracker_entity_1 = __importDefault(require("../models/ipo/tracker.entity"));
const tracker_entity_2 = require("../models/ipo/tracker.entity");
function generateTrackerData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("connecting to db...");
            yield (0, db_2.default)();
            const ipoList = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    name: true,
                    closing_date: true,
                    id: true,
                },
            });
            console.log(ipoList.length);
            for (let i = 0; i < ipoList.length; i++) {
                try {
                    const data = new tracker_entity_2.TrackerClass();
                    //@ts-ignore
                    const currIpo = ipoList[i];
                    data.id = currIpo.id;
                    data.company_name = currIpo.name;
                    data.current_price = "";
                    data.dayend_price = "";
                    data.issue_price = "";
                    data.listing_price = "";
                    data.sector = "";
                    data.year =
                        currIpo.closing_date === null
                            ? 0
                            : currIpo.closing_date.getFullYear();
                    const res = yield db_1.myDataSource
                        .getRepository(tracker_entity_1.default)
                        .create(data);
                    const results = yield db_1.myDataSource
                        .getRepository(tracker_entity_1.default)
                        .save(res);
                    console.log("+ " + currIpo.name);
                    console.log(`>>> ${JSON.stringify(results)}`);
                    console.log();
                }
                catch (error) {
                    console.log(error);
                    throw Error(error);
                    process.exit(0);
                }
            }
            console.log("Data Extracted Successfully");
        }
        catch (error) {
            console.log(error);
        }
    });
}
generateTrackerData();
