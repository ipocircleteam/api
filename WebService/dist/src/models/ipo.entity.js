"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipo = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: "IPO",
    tableName: "ipo",
    columns: {
        id: {
            type: "text",
            primary: true,
        },
        name: {
            type: "varchar",
            nullable: true,
        },
        series: {
            type: "varchar",
            nullable: true,
        },
        description: {
            type: "varchar",
            nullable: true,
        },
        face_value: {
            type: "text",
            nullable: true,
        },
        min_price: {
            type: "text",
            nullable: true,
        },
        max_price: {
            type: "text",
            nullable: true,
        },
        total_issue: {
            type: "text",
            nullable: true,
        },
        fresh_issue: {
            type: "text",
            nullable: true,
        },
        issue_type: {
            type: "text",
            nullable: true,
        },
        listing_at: {
            type: "simple-array",
            nullable: true,
        },
        gen_holding_pre: {
            type: "text",
            nullable: true,
        },
        gen_holding_post: {
            type: "text",
            nullable: true,
        },
        opening_date: {
            type: "timestamp",
            nullable: true,
        },
        closing_date: {
            type: "timestamp",
            nullable: true,
        },
        basis_date: {
            type: "timestamp",
            nullable: true,
        },
        init_refunds: {
            type: "timestamp",
            nullable: true,
        },
        shares_to_demat: {
            type: "timestamp",
            nullable: true,
        },
        listing_date: {
            type: "timestamp",
            nullable: true,
        },
        promoter_holding_pre: {
            type: "text",
            nullable: true,
        },
        promoter_holding_post: {
            type: "text",
            nullable: true,
        },
        anchor_bid_date: {
            type: "timestamp",
            nullable: true,
        },
        anchor_lockin_half: {
            type: "timestamp",
            nullable: true,
        },
        anchor_lockin_rest: {
            type: "timestamp",
            nullable: true,
        },
        pe: {
            type: "text",
            nullable: true,
        },
        market_cap: {
            type: "text",
            nullable: true,
        },
        roe: {
            type: "text",
            nullable: true,
        },
        roce: {
            type: "text",
            nullable: true,
        },
        eps: {
            type: "text",
            nullable: true,
        },
        ronw: {
            type: "text",
            nullable: true,
        },
        bse_code: {
            type: "text",
            nullable: true,
        },
        bse_url: {
            type: "text",
            nullable: true,
        },
        nse_code: {
            type: "text",
            nullable: true,
        },
        nse_url: {
            type: "text",
            nullable: true,
        },
        final_price: {
            type: "text",
            nullable: true,
        },
        pre_open_nse: {
            type: "text",
            nullable: true,
        },
        pre_open_bse: {
            type: "text",
            nullable: true,
        },
        company_address: {
            type: "text",
            nullable: true,
        },
        company_phone: {
            type: "text",
            nullable: true,
        },
        company_email: {
            type: "text",
            nullable: true,
        },
        company_website: {
            type: "text",
            nullable: true,
        },
        company_logo: {
            type: "text",
            nullable: true,
        },
        registrar_address: {
            type: "text",
            nullable: true,
        },
        registrar_phone: {
            type: "text",
            nullable: true,
        },
        registrar_email: {
            type: "text",
            nullable: true,
        },
        registrar_website: {
            type: "text",
            nullable: true,
        },
        registrar_name: {
            type: "text",
            nullable: true,
        },
        drhp: {
            type: "text",
            nullable: true,
        },
        rhp: {
            type: "text",
            nullable: true,
        },
        anchor_list: {
            type: "simple-array",
            nullable: true,
        },
        shares_in_lot: {
            type: "text",
            nullable: true,
        },
        dayend_price: {
            type: "text",
            nullable: true,
        },
        cutoffmandate: {
            type: "timestamp",
            nullable: true,
        },
        defunct: {
            type: "boolean",
            nullable: true,
        },
        retail_discount: {
            type: "text",
            nullable: true,
        },
        employee_discount: {
            type: "text",
            nullable: true,
        },
        anchor_portion: {
            type: "text",
            nullable: true,
        },
        debt: {
            type: "text",
            nullable: true,
        },
        priceband: {
            type: "text",
            nullable: true,
        },
        ofs: {
            type: "text",
            nullable: true,
        },
        allotment_date: {
            type: "timestamp",
            nullable: true,
        },
        credit_of: {
            type: "text",
            nullable: true,
        },
        time_upf: {
            type: "text",
            nullable: true,
        },
        min_retail_lots: {
            type: "text",
            nullable: true,
        },
        max_retail_lots: {
            type: "text",
            nullable: true,
        },
        min_shni_lots: {
            type: "text",
            nullable: true,
        },
        max_shni_lots: {
            type: "text",
            nullable: true,
        },
        min_bhni_lots: {
            type: "text",
            nullable: true,
        },
        max_bhni_lots: {
            type: "text",
            nullable: true,
        },
        min_retail_shares: {
            type: "text",
            nullable: true,
        },
        max_retail_shares: {
            type: "text",
            nullable: true,
        },
        min_shni_shares: {
            type: "text",
            nullable: true,
        },
        max_shni_shares: {
            type: "text",
            nullable: true,
        },
        min_bhni_shares: {
            type: "text",
            nullable: true,
        },
        max_bhni_shares: {
            type: "text",
            nullable: true,
        },
        min_retail_price: {
            type: "text",
            nullable: true,
        },
        max_retail_price: {
            type: "text",
            nullable: true,
        },
        min_shni_price: {
            type: "text",
            nullable: true,
        },
        max_shni_price: {
            type: "text",
            nullable: true,
        },
        min_bhni_price: {
            type: "text",
            nullable: true,
        },
        max_bhni_price: {
            type: "text",
            nullable: true,
        },
        qib: {
            type: "text",
            nullable: true,
        },
        nii_snii: {
            type: "text",
            nullable: true,
        },
        nii_bnii: {
            type: "text",
            nullable: true,
        },
        retail: {
            type: "text",
            nullable: true,
        },
        anchor_shares_offerred: {
            type: "text",
            nullable: true,
        },
        qib_shares_offerred: {
            type: "text",
            nullable: true,
        },
        nil_shares_offerred: {
            type: "text",
            nullable: true,
        },
        retail_shares_offerred: {
            type: "text",
            nullable: true,
        },
        objectIssueData: {
            type: "text",
            nullable: true,
        }
    },
});
class Ipo {
    constructor() {
        (this.id = ""),
            (this.name = ""),
            (this.series = ""),
            (this.description = ""),
            (this.face_value = ""),
            (this.min_price = ""),
            (this.max_price = ""),
            (this.total_issues = ""),
            (this.fresh_issues = ""),
            (this.issue_type = ""),
            (this.listing_at = [""]),
            (this.gen_holding_pre = ""),
            (this.gen_holding_post = ""),
            (this.opening_date = new Date()),
            (this.closing_date = new Date()),
            (this.basis_date = new Date()),
            (this.init_refunds = new Date()),
            (this.shares_to_demat = new Date()),
            (this.listing_date = new Date()),
            (this.promoter_holding_pre = ""),
            (this.promoter_holding_post = ""),
            (this.anchor_bid_date = new Date()),
            (this.anchor_lockin_half = new Date()),
            (this.anchor_lockin_rest = new Date()),
            (this.pe = ""),
            (this.market_cap = ""),
            (this.roe = ""),
            (this.roce = ""),
            (this.eps = ""),
            (this.ronw = ""),
            (this.bse_code = ""),
            (this.bse_url = ""),
            (this.nse_code = ""),
            (this.nse_url = ""),
            (this.final_price = ""),
            (this.pre_open_nse = ""),
            (this.pre_open_bse = ""),
            (this.company_address = ""),
            (this.company_phone = ""),
            (this.company_email = ""),
            (this.company_website = ""),
            (this.company_logo = ""),
            (this.registrar_address = ""),
            (this.registrar_phone = ""),
            (this.registrar_email = ""),
            (this.registrar_website = ""),
            (this.registrar_name = ""),
            (this.drhp = ""),
            (this.rhp = ""),
            (this.anchor_list = [""]),
            (this.shares_in_lot = ""),
            (this.dayend_price = ""),
            (this.cutoffmandate = ""),
            (this.defunct = false),
            (this.retail_discount = ""),
            (this.employee_discount = ""),
            (this.anchor_portion = ""),
            (this.debt = "");
        (this.priceband = ""),
            (this.ofs = ""),
            (this.allotment_date = new Date()),
            (this.credit_of = ""),
            (this.time_upf = ""),
            (this.min_retail = ""),
            (this.max_retail = ""),
            (this.min_shni = ""),
            (this.max_shni = ""),
            (this.min_bhni = ""),
            (this.max_bhni = ""),
            (this.qib = ""),
            (this.nii_snii = ""),
            (this.nii_bnii = ""),
            (this.retail = ""),
            (this.anchor_shares_offerred = ""),
            (this.qib_shares_offerred = ""),
            (this.nil_shares_offerred = ""),
            (this.retail_shares_offerred = ""),
            (this.objectIssueData = "");
    }
}
exports.Ipo = Ipo;
