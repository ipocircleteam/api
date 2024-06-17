import { Decimal128 } from "typeorm";
import { z } from "zod";
import { IpoPostRequestSchema } from "../zod/ipo.schema";

export type IpoData = z.infer<typeof IpoPostRequestSchema>;

export type IPO = {
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
  promoter_holding_pre: string;
  promoter_holding_post: number;
  anchor_bid_date: Date;
  anchor_lockin_half: Date;
  anchor_lokin_rest: Date;
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
};

export enum IPO_Series {
  main = "main",
  sme = "sme",
}

export type getIpoQueries = {
  concise: string | undefined;
  type: string | undefined;
  count: string | undefined;
  page: string | undefined;
};

export type IpoStatsType = {
  totalIpos: number;
  positiveListings: number;
  negativeListings: number;
  aboveGmp: number;
  belowGmp: number;
};

export type IpoStatsResponse = {
  main?: IpoStatsType;
  sme?: IpoStatsType;
};

export interface IpoGmpData {
  id: number;
  ipo_id: string;
  absolute_value: Decimal128[];
  instant: Date;
  percent_value: Decimal128[];
}

export type TrackerData = {
  id: string;
  company_name: string;
  sector: string;
  issue_price: number;
  current_price: number;
  listing_price: number;
  dayend_price: number;
};
