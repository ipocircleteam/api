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
function getSmeMainTrackerData(ipoData, trackerData) {
    return __awaiter(this, void 0, void 0, function* () {
        var mainData = [];
        var smeData = [];
        for (let i = 0; i <= 21; i++) {
            // loop on ipo data
            for (let j = 0; j <= 21; j++) {
                // loop on tracker data
                if (ipoData[i].id === trackerData[j].id) {
                    const data = {
                        id: ipoData[i].id,
                        company_name: trackerData[j].company_name,
                        issue_price: trackerData[j].issue_price,
                        listing_price: trackerData[j].listing_price,
                        dayend_price: trackerData[j].dayend_price,
                        current_price: trackerData[j].current_price,
                        sector: trackerData[j].sector,
                        year: trackerData[j].year,
                    };
                    if (ipoData[i].series === "eq") {
                        mainData.push(data);
                    }
                    else if (ipoData[i].series === "sme") {
                        smeData.push(data);
                    }
                }
            }
        }
        return [mainData, smeData];
    });
}
exports.default = getSmeMainTrackerData;
