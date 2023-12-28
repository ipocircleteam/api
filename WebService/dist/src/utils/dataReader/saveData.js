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
const db_1 = require("../../db");
const ipo_entity_1 = __importDefault(require("../../models/ipo.entity"));
const lots_entity_1 = __importDefault(require("../../models/lots.entity"));
function saveData(data, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var res;
            var results;
            if (fileName === "chittor_ipos.xlsx") {
                res = yield db_1.myDataSource.getRepository(ipo_entity_1.default).create(data);
                results = yield db_1.myDataSource.getRepository(ipo_entity_1.default).save(res);
            }
            else {
                res = yield db_1.myDataSource.getRepository(lots_entity_1.default).create(data);
                results = yield db_1.myDataSource.getRepository(lots_entity_1.default).save(res);
            }
            return results;
        }
        catch (error) {
            console.log(`Error saving data!`);
            console.log(error);
        }
    });
}
exports.default = saveData;
