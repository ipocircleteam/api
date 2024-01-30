"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const company_finance_entity_1 = __importStar(require("../models/company_finance.entity"));
const gmp_entity_1 = __importStar(require("../models/gmp.entity"));
const ipo_entity_1 = __importDefault(require("../models/ipo.entity"));
const review_entity_1 = __importStar(require("../models/review.entity"));
function generateTrackerData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("connecting to db...");
            yield (0, db_2.default)();
            const ipoList = yield db_1.myDataSource.getRepository(ipo_entity_1.default).find({
                select: {
                    id: true,
                    name: true,
                },
            });
            console.log(ipoList.length);
            for (let i = 0; i < ipoList.length; i++) {
                try {
                    //@ts-ignore
                    const currIpo = ipoList[i];
                    console.log("# " + currIpo.name);
                    const newCompany = new company_finance_entity_1.CompanyFinances();
                    newCompany.ipo_id = currIpo.id;
                    const createCompany = yield db_1.myDataSource
                        .getRepository(company_finance_entity_1.default)
                        .create(newCompany);
                    const saveCompany = yield db_1.myDataSource
                        .getRepository(company_finance_entity_1.default)
                        .save(createCompany);
                    console.log(`+ Created Finance : ${currIpo.name}`);
                    const newGmp = new gmp_entity_1.GMP();
                    newGmp.ipo_id = currIpo.id;
                    const createGmp = yield db_1.myDataSource
                        .getRepository(gmp_entity_1.default)
                        .create(newGmp);
                    const saveGmp = yield db_1.myDataSource
                        .getRepository(gmp_entity_1.default)
                        .save(createGmp);
                    console.log(`+ Created GMP : ${currIpo.name}`);
                    const newReview = new review_entity_1.IpoReview();
                    newReview.ipo_id = currIpo.id;
                    const createReview = yield db_1.myDataSource
                        .getRepository(review_entity_1.default)
                        .create(newReview);
                    const saveReview = yield db_1.myDataSource
                        .getRepository(review_entity_1.default)
                        .save(createReview);
                    console.log(`+ Created Review : ${currIpo.name}`);
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
        finally {
            process.exit(0);
        }
    });
}
generateTrackerData();
