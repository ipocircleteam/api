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
const getFileEntity_1 = __importDefault(require("./getFileEntity"));
const exceljs_1 = __importDefault(require("exceljs"));
const path_1 = __importDefault(require("path"));
const formatIpoData_1 = __importDefault(require("./formatIpoData"));
const saveData_1 = __importDefault(require("./saveData"));
function extractDataFrom(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`## Extracting data from ${fileName}`);
        const entity = (0, getFileEntity_1.default)(fileName);
        const excelFilePath = path_1.default.join('./dataset', fileName);
        const workbook = new exceljs_1.default.Workbook();
        yield workbook.xlsx.readFile(excelFilePath);
        const worksheet = workbook.getWorksheet(1);
        //@ts-ignore
        const rowLength = worksheet === null || worksheet === void 0 ? void 0 : worksheet._rows.length;
        var extractionSuccess = false;
        for (let i = 2; i <= rowLength; i++) {
            try {
                const data = worksheet === null || worksheet === void 0 ? void 0 : worksheet.getRow(i).values;
                //@ts-ignore
                console.log(`+ ${data[2]}`);
                const formattedData = yield (0, formatIpoData_1.default)(data, fileName);
                const save = yield (0, saveData_1.default)(formattedData, fileName);
                extractionSuccess = true;
            }
            catch (error) {
                console.log(error);
                extractionSuccess = false;
                throw Error(error);
                process.exit(0);
            }
        }
        if (extractionSuccess) {
            console.log(`>> Data extracted successfully from ${fileName}`);
            return true;
        }
        else {
            console.log(`>> Error extracting data from ${fileName}`);
            return false;
        }
    });
}
exports.default = extractDataFrom;
