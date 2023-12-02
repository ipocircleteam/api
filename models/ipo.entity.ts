import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
  name: "IPO",
  tableName: "ipo",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      default: () => `'${uuidv4()}'`,
    },
    name: {
      type: "varchar",
    },
    series: {
      type: "varchar",
    },
    description: {
      type: "varchar",
    },
    face_value: {
      type: "double precision",
    },
    min_price: {
      type: "double precision",
    },
    max_price: {
      type: "double precision",
    },
    total_issue: {
      type: "bigint",
    },
    fresh_issue: {
      type: "bigint",
    },
    issue_type: {
      type: "text",
    },
    listing_at: {
      type: "simple-array",
    },
    gen_holding_pre: {
      type: "double precision",
    },
    gen_holding_post: {
      type: "double precision",
    },
    opening_date: {
      type: "timestamp",
    },
    closing_date: {
      type: "timestamp",
    },
    basis_date: {
      type: "timestamp",
    },
    init_refunds: {
      type: "timestamp",
    },
    shares_to_demat: {
      type: "timestamp",
    },
    listing_date: {
      type: "timestamp",
    },
    promoter_holding_pre: {
      type: "double precision",
    },
    promoter_holding_post: {
      type: "double precision",
    },
    anchor_bid_date: {
      type: "timestamp",
    },
    anchor_lockin_half: {
      type: "timestamp",
    },
    anchor_lockin_rest: {
      type: "timestamp",
    },
    pe: {
      type: "double precision",
    },
    market_cap: {
      type: "double precision",
    },
    roe: {
      type: "double precision",
    },
    roce: {
      type: "double precision",
    },
    eps: {
      type: "double precision",
    },
    ronw: {
      type: "double precision",
    },
    bse_code: {
      type: "text",
    },
    bse_url: {
      type: "text",
    },
    nse_code: {
      type: "text",
    },
    nse_url: {
      type: "text",
    },
    final_price: {
      type: "double precision",
    },
    pre_open_nse: {
      type: "text",
    },
    pre_open_bse: {
      type: "text",
    },
    company_address: {
      type: "text",
    },
    company_phone: {
      type: "text",
    },
    company_email: {
      type: "text",
    },
    company_website: {
      type: "text",
    },
    company_logo: {
      type: "text",
    },
    registrar_address: {
      type: "text",
    },
    registrar_phone: {
      type: "text",
    },
    registrar_email: {
      type: "text",
    },
    registrar_website: {
      type: "text",
    },
    registrar_name: {
      type: "text",
    },
    drhp: {
      type: "text",
    },
    rhp: {
      type: "text",
    },
    anchor_list: {
      type: "simple-array",
    },
    shares_in_lot: {
      type: "bigint",
    },
    dayend_price: {
      type: "double precision",
    },
    cutoffmandate: {
      type: "timestamp",
    },
    defunct: {
      type: "boolean",
    },
    reatil_discount: {
      type: "double precision",
    },
    employee_discount: {
      type: "double precision",
    },
    anchor_portion: {
      type: "double precision",
    },
    debt: {
      type: "double precision",
    },
  },
});
