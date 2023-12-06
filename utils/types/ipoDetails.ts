export class IPOdetails {
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
  // missing
  priceband: number;
  ofs: number;
  allotment_date: Date;
  credit_of: string;
  time_upf: string;
  // lot size
  min_retail: number;
  max_retail: number;
  min_shni: number;
  max_shni: number;
  min_bhni: number;
  max_bhni: number;
  // subscriptions
  qib: string;
  nii_snii: number;
  nii_bnii: number;
  retail: number;
  anchor_shares_offerred: number;
  // reservations
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
