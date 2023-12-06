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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
function initDb() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('initializing database ...');
        const isInitialized = yield db_1.myDataSource.isInitialized;
        if (isInitialized === true) {
            console.log('DB Already initialized');
            return;
        }
        else {
            yield db_1.myDataSource
                .initialize()
                .then(() => {
                console.log("DB Connected via Typeorm");
            })
                .catch((err) => {
                console.log(`Error during data source initialization: ${err}`);
                throw err;
            });
        }
    });
}
exports.default = initDb;
