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
const lots_entity_1 = require("../../models/lots.entity");
const ipoDetails_types_1 = require("../../types/ipoDetails.types");
function formatDatadata(data, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        var result;
        if (fileName === "chittor_ipos.xlsx") {
            result = formatIpoDatadata(data);
        }
        else {
            result = formatLotsDatadata(data);
        }
        return result;
    });
}
exports.default = formatDatadata;
function formatIpoDatadata(data) {
    const newIpo = new ipoDetails_types_1.IPOdetails();
    newIpo.id = data[1] + data[2] + data[3];
    newIpo.name = data[2];
    newIpo.series = data[3];
    newIpo.face_value = data[4];
    newIpo.min_price = data[5];
    newIpo.max_price = data[6];
    newIpo.total_issues = data[7];
    newIpo.fresh_issues = data[8];
    newIpo.issue_type = data[9];
    newIpo.listing_at = data[10];
    newIpo.gen_holding_pre = data[11];
    newIpo.gen_holding_post = data[12];
    newIpo.opening_date = data[13];
    newIpo.closing_date = data[14];
    newIpo.basis_date = data[15];
    newIpo.init_refunds = data[16];
    newIpo.shares_to_demat = data[17];
    newIpo.listing_date = data[18];
    newIpo.promoter_holding_pre = data[19];
    newIpo.promoter_holding_post = data[20];
    newIpo.anchor_bid_date = data[21];
    newIpo.anchor_lockin_half = data[22];
    newIpo.anchor_lockin_rest = data[23];
    newIpo.pe = data[24];
    newIpo.market_cap = data[25];
    newIpo.roe = data[26];
    newIpo.roce = data[27];
    newIpo.eps = data[28];
    newIpo.ronw = data[29];
    newIpo.bse_code = data[30];
    newIpo.final_price = data[32];
    newIpo.pre_open_nse = data[33];
    newIpo.pre_open_bse = data[34];
    newIpo.company_address = data[35];
    newIpo.company_phone = data[36];
    newIpo.company_email = data[37];
    newIpo.company_website = data[38];
    newIpo.registrar_address = data[39];
    newIpo.registrar_phone = data[40];
    newIpo.registrar_email = data[41];
    newIpo.registrar_website = data[42];
    newIpo.registrar_name = data[43];
    newIpo.drhp = data[44];
    newIpo.rhp = data[45];
    newIpo.anchor_list = data[46];
    newIpo.shares_in_lot = data[47];
    newIpo.dayend_price = data[48];
    newIpo.cutoffmandate = data[49];
    newIpo.defunct = data[50];
    newIpo.retail_discount = data[51];
    newIpo.employee_discount = data[52];
    newIpo.anchor_portion = data[53];
    newIpo.debt = data[54];
    newIpo.priceband = "",
        newIpo.ofs = "",
        newIpo.allotment_date = new Date(),
        newIpo.credit_of = "",
        newIpo.time_upf = "",
        newIpo.min_retail = "",
        newIpo.max_retail = "",
        newIpo.min_shni = "",
        newIpo.max_shni = "",
        newIpo.min_bhni = "",
        newIpo.max_bhni = "",
        newIpo.qib = "",
        newIpo.nii_snii = "",
        newIpo.nii_bnii = "",
        newIpo.retail = "",
        newIpo.anchor_shares_offerred = "",
        newIpo.qib_shares_offerred = "",
        newIpo.nil_shares_offerred = "",
        newIpo.retail_shares_offerred = "",
        newIpo.objectIssueData = "";
    return newIpo;
}
function formatLotsDatadata(data) {
    const newLot = new lots_entity_1.Lot;
    newLot.ipo_id = data[1];
    newLot.category = data[2];
    newLot.lots_min = data[3];
    newLot.lots_max = data[4];
    return newLot;
}
