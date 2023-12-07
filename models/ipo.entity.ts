import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export default new EntitySchema({
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
      type: "double precision",
      nullable: true,
    },
    min_price: {
      type: "double precision",
      nullable: true,
    },
    max_price: {
      type: "double precision",
      nullable: true,
    },
    total_issue: {
      type: "double precision",
      nullable: true,
    },
    fresh_issue: {
      type: "double precision",
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
      type: "double precision",
      nullable: true,
    },
    gen_holding_post: {
      type: "double precision",
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
      type: "double precision",
      nullable: true,
    },
    promoter_holding_post: {
      type: "double precision",
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
      type: "double precision",
      nullable: true,
    },
    market_cap: {
      type: "double precision",
      nullable: true,
    },
    roe: {
      type: "double precision",
      nullable: true,
    },
    roce: {
      type: "double precision",
      nullable: true,
    },
    eps: {
      type: "double precision",
      nullable: true,
    },
    ronw: {
      type: "double precision",
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
      type: "double precision",
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
      type: "double precision",
      nullable: true,
    },
    dayend_price: {
      type: "double precision",
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
      type: "double precision",
      nullable: true,
    },
    employee_discount: {
      type: "double precision",
      nullable: true,
    },
    anchor_portion: {
      type: "double precision",
      nullable: true,
    },
    debt: {
      type: "double precision",
      nullable: true,
    },
    priceband: {
      type: "double precision",
      nullable: true,
    },
    ofs: {
      type: "double precision",
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
    min_retail: {
      type: "double precision",
      nullable: true,
    },
    max_retail: {
      type: "double precision",
      nullable: true,
    },
    min_shni: {
      type: "double precision",
      nullable: true,
    },
    max_shni: {
      type: "double precision",
      nullable: true,
    },
    min_bhni: {
      type: "double precision",
      nullable: true,
    },
    max_bhni: {
      type: "double precision",
      nullable: true,
    },
    qib: {
      type: "text",
      nullable: true,
    },
    nii_snii: {
      type: "double precision",
      nullable: true,
    },
    nii_bnii: {
      type: "double precision",
      nullable: true,
    },
    retail: {
      type: "double precision",
      nullable: true,
    },
    anchor_shares_offerred: {
      type: "double precision",
      nullable: true,
    },
    qib_shares_offerred: {
      type: "double precision",
      nullable: true,
    },
    nil_shares_offerred: {
      type: "double precision",
      nullable: true,
    },
    retail_shares_offerred: {
      type: "double precision",
      nullable: true,
    },
    objectIssueData: {
      type: "text",
      nullable: true,
    }
  },
});

export class Ipo {
  id: string;
  name: string;
  series: string;
  description: string;
  face_value: number;
  min_price: number;
  max_price: number;
  total_issues: number;
  fresh_issues: number;
  issue_type: string;
  listing_at: string[];
  gen_holding_pre: number;
  gen_holding_post: number;
  opening_date: Date;
  closing_date: Date;
  basis_date: Date;
  init_refunds: Date;
  shares_to_demat: Date;
  listing_date: Date;
  promoter_holding_pre: number;
  promoter_holding_post: number;
  anchor_bid_date: Date;
  anchor_lockin_half: Date;
  anchor_lockin_rest: Date;
  pe: number;
  market_cap: number;
  roe: number;
  roce: number;
  eps: number;
  ronw: number;
  bse_code: string;
  bse_url: string;
  nse_code: string;
  nse_url: string;
  final_price: number;
  pre_open_nse: string;
  pre_open_bse: string;
  company_address: string;
  company_phone: string;
  company_email: string;
  company_website: string;
  company_logo: string;
  registrar_address: string;
  registrar_phone: string;
  registrar_email: string;
  registrar_website: string;
  registrar_name: string;
  drhp: string;
  rhp: string;
  anchor_list: string[];
  shares_in_lot: number;
  dayend_price: number;
  cutoffmandate: number;
  defunct: boolean;
  retail_discount: number;
  employee_discount: number;
  anchor_portion: number;
  debt: number;
  priceband: number;
  ofs: number;
  allotment_date: Date;
  credit_of: string;
  time_upf: string;
  min_retail: number;
  max_retail: number;
  min_shni: number;
  max_shni: number;
  min_bhni: number;
  max_bhni: number;
  qib: string;
  nii_snii: number;
  nii_bnii: number;
  retail: number;
  anchor_shares_offerred: number;
  qib_shares_offerred: number;
  nil_shares_offerred: number;
  retail_shares_offerred: number;
  objectIssueData: string;

  constructor() {
    (this.id = ""),
      (this.name = ""),
      (this.series = ""),
      (this.description = ""),
      (this.face_value = 0),
      (this.min_price = 0),
      (this.max_price = 0),
      (this.total_issues = 0),
      (this.fresh_issues = 0),
      (this.issue_type = ""),
      (this.listing_at = [""]),
      (this.gen_holding_pre = 0),
      (this.gen_holding_post = 0),
      (this.opening_date = new Date()),
      (this.closing_date = new Date()),
      (this.basis_date = new Date()),
      (this.init_refunds = new Date()),
      (this.shares_to_demat = new Date()),
      (this.listing_date = new Date()),
      (this.promoter_holding_pre = 0),
      (this.promoter_holding_post = 0),
      (this.anchor_bid_date = new Date()),
      (this.anchor_lockin_half = new Date()),
      (this.anchor_lockin_rest = new Date()),
      (this.pe = 0),
      (this.market_cap = 0),
      (this.roe = 0),
      (this.roce = 0),
      (this.eps = 0),
      (this.ronw = 0),
      (this.bse_code = ""),
      (this.bse_url = ""),
      (this.nse_code = ""),
      (this.nse_url = ""),
      (this.final_price = 0),
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
      (this.shares_in_lot = 0),
      (this.dayend_price = 0),
      (this.cutoffmandate = 0),
      (this.defunct = false),
      (this.retail_discount = 0),
      (this.employee_discount = 0),
      (this.anchor_portion = 0),
      (this.debt = 0);
    (this.priceband = 0),
      (this.ofs = 0),
      (this.allotment_date = new Date()),
      (this.credit_of = ""),
      (this.time_upf = ""),
      (this.min_retail = 0),
      (this.max_retail = 0),
      (this.min_shni = 0),
      (this.max_shni = 0),
      (this.min_bhni = 0),
      (this.max_bhni = 0),
      (this.qib = ""),
      (this.nii_snii = 0),
      (this.nii_bnii = 0),
      (this.retail = 0),
      (this.anchor_shares_offerred = 0),
      (this.qib_shares_offerred = 0),
      (this.nil_shares_offerred = 0),
      (this.retail_shares_offerred = 0),
      (this.objectIssueData = "")
  }
}
