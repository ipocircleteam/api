export class IPOdetails {
  id: string;
  name: string;
  series: string;
  description: string;
  face_value: string;
  min_price: string;
  max_price: string;
  total_issues: string;
  fresh_issues: string;
  issue_type: string;
  listing_at: string[];
  gen_holding_pre: string;
  gen_holding_post: string;
  opening_date: Date;
  closing_date: Date;
  basis_date: Date;
  init_refunds: Date;
  shares_to_demat: Date;
  listing_date: Date;
  promoter_holding_pre: string;
  promoter_holding_post: string;
  anchor_bid_date: Date;
  anchor_lockin_half: Date;
  anchor_lockin_rest: Date;
  pe: string;
  market_cap: string;
  roe: string;
  roce: string;
  eps: string;
  ronw: string;
  bse_code: string;
  bse_url: string;
  nse_code: string;
  nse_url: string;
  final_price: string;
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
  shares_in_lot: string;
  dayend_price: string;
  cutoffmandate: string;
  defunct: boolean;
  retail_discount: string;
  employee_discount: string;
  anchor_portion: string;
  debt: string;
  // missing
  priceband: string;
  ofs: string;
  allotment_date: Date;
  credit_of: string;
  time_upf: string;
  // lot size
  min_retail: string;
  max_retail: string;
  min_shni: string;
  max_shni: string;
  min_bhni: string;
  max_bhni: string;
  // subscriptions
  qib: string;
  nii_snii: string;
  nii_bnii: string;
  retail: string;
  anchor_shares_offerred: string;
  // reservations
  qib_shares_offerred: string;
  nil_shares_offerred: string;
  retail_shares_offerred: string;
  objectIssueData: string;

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
      (this.objectIssueData = "")
  }
}
