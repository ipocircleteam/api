-- CreateEnum
CREATE TYPE "IPO_Series" AS ENUM ('MAIN', 'SME');

-- CreateTable
CREATE TABLE "Ipo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "series" "IPO_Series" NOT NULL,
    "description" TEXT NOT NULL,
    "face_value" DECIMAL(65,30) NOT NULL,
    "total_issue" TEXT NOT NULL,
    "fresh_issue" TEXT NOT NULL,
    "issue_type" TEXT NOT NULL,
    "listing_at" TEXT[],
    "pre_open_nse" TEXT NOT NULL,
    "pre_open_bse" TEXT NOT NULL,
    "lot_size" BIGINT NOT NULL,
    "priceband_min" DECIMAL(65,30) NOT NULL,
    "priceband_max" DECIMAL(65,30) NOT NULL,
    "objectIssueData" TEXT NOT NULL,

    CONSTRAINT "Ipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Tracker" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "company_name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "issue_price" DECIMAL(65,30) NOT NULL,
    "current_price" DECIMAL(65,30) NOT NULL,
    "listing_price" DECIMAL(65,30) NOT NULL,
    "dayend_price" DECIMAL(65,30) NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Ipo_Tracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Prices" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "min_price" DECIMAL(65,30) NOT NULL,
    "max_price" DECIMAL(65,30) NOT NULL,
    "dayend_price" DECIMAL(65,30) NOT NULL,
    "final_price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Ipo_Prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_ContactDetails" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "company_address" TEXT NOT NULL,
    "company_phone" TEXT NOT NULL,
    "company_email" TEXT NOT NULL,
    "company_website" TEXT NOT NULL,
    "company_logo" TEXT NOT NULL,
    "registrar_address" TEXT NOT NULL,
    "registrar_phone" TEXT NOT NULL,
    "registrar_email" TEXT NOT NULL,
    "registrar_website" TEXT NOT NULL,
    "registrar_name" TEXT NOT NULL,

    CONSTRAINT "Ipo_ContactDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Lots" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,

    CONSTRAINT "Ipo_Lots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_OtherDetails" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "bse_code" TEXT NOT NULL,
    "bse_url" TEXT NOT NULL,
    "nse_code" TEXT NOT NULL,
    "nse_url" TEXT NOT NULL,
    "drhp" TEXT NOT NULL,
    "anchor_list" TEXT[],
    "defunct" BOOLEAN NOT NULL,
    "retail_discount" TEXT NOT NULL,
    "employee_discount" TEXT NOT NULL,
    "ofs" TEXT NOT NULL,
    "credit_of" TEXT NOT NULL,
    "time_upf" TEXT NOT NULL,
    "gen_holding_pre" TEXT NOT NULL,
    "gen_holding_post" TEXT NOT NULL,
    "promoter_holding_pre" TEXT NOT NULL,
    "promoter_holding_post" TEXT NOT NULL,

    CONSTRAINT "Ipo_OtherDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Review" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "Ipo_Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Reservations" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "shares_offerres" BIGINT NOT NULL,

    CONSTRAINT "Ipo_Reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Gmp" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,

    CONSTRAINT "Ipo_Gmp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gmp_Values" (
    "id" SERIAL NOT NULL,
    "gmp_id" INTEGER NOT NULL,
    "instant" TIMESTAMP(3) NOT NULL,
    "percent_value" DECIMAL(65,30) NOT NULL,
    "absolute_value" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Gmp_Values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Anchor" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "anchor_bid_date" TIMESTAMP(3) NOT NULL,
    "anchor_lockin_half" TIMESTAMP(3) NOT NULL,
    "anchor_lockin_full" TIMESTAMP(3) NOT NULL,
    "anchor_lockin_rest" TIMESTAMP(3) NOT NULL,
    "anchor_portion" DECIMAL(65,30) NOT NULL,
    "anchor_shares_offerred" BIGINT NOT NULL,

    CONSTRAINT "Ipo_Anchor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Dates" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "opening_date" TIMESTAMP(3) NOT NULL,
    "closing_date" TIMESTAMP(3) NOT NULL,
    "basis_date" TIMESTAMP(3) NOT NULL,
    "init_refunds" TIMESTAMP(3) NOT NULL,
    "credit_of_shares_to_demat" TIMESTAMP(3) NOT NULL,
    "listing_date" TIMESTAMP(3) NOT NULL,
    "cutoff_mandate" TIMESTAMP(3) NOT NULL,
    "allotment_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ipo_Dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Shares" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "anchor_shares_offerred" BIGINT NOT NULL,
    "qib_shares_offerred" BIGINT NOT NULL,
    "nii_bnii_shares_offerred" BIGINT NOT NULL,
    "nii_snii_shares_offerred" BIGINT NOT NULL,
    "retail_shares_offerred" BIGINT NOT NULL,

    CONSTRAINT "Ipo_Shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Finances" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "pe" DECIMAL(65,30) NOT NULL,
    "market_cap" DECIMAL(65,30) NOT NULL,
    "roe" DECIMAL(65,30) NOT NULL,
    "roce" DECIMAL(65,30) NOT NULL,
    "eps" DECIMAL(65,30) NOT NULL,
    "ronw" DECIMAL(65,30) NOT NULL,
    "debt" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Ipo_Finances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Subscriptions" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,
    "shares_bid" BIGINT NOT NULL,
    "qib" INTEGER NOT NULL,
    "nii_snii" INTEGER NOT NULL,
    "nii_bnii" INTEGER NOT NULL,
    "retail" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ipo_Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_FinProgress" (
    "id" SERIAL NOT NULL,
    "ipo_id" INTEGER NOT NULL,

    CONSTRAINT "Ipo_FinProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financial_Details" (
    "id" SERIAL NOT NULL,
    "ipoFinProgress_id" INTEGER NOT NULL,
    "period_ended" TEXT NOT NULL,
    "assets" DECIMAL(65,30) NOT NULL,
    "revenue" DECIMAL(65,30) NOT NULL,
    "profit_after_tax" DECIMAL(65,30) NOT NULL,
    "networth" DECIMAL(65,30) NOT NULL,
    "reserves" DECIMAL(65,30) NOT NULL,
    "borrowing" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Financial_Details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_id_key" ON "Ipo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Tracker_id_key" ON "Ipo_Tracker"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Tracker_ipo_id_key" ON "Ipo_Tracker"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Prices_id_key" ON "Ipo_Prices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Prices_ipo_id_key" ON "Ipo_Prices"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_ContactDetails_id_key" ON "Ipo_ContactDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_ContactDetails_ipo_id_key" ON "Ipo_ContactDetails"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Lots_id_key" ON "Ipo_Lots"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Lots_ipo_id_key" ON "Ipo_Lots"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_OtherDetails_id_key" ON "Ipo_OtherDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_OtherDetails_ipo_id_key" ON "Ipo_OtherDetails"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Review_id_key" ON "Ipo_Review"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Review_ipo_id_key" ON "Ipo_Review"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Reservations_id_key" ON "Ipo_Reservations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Reservations_ipo_id_key" ON "Ipo_Reservations"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Gmp_id_key" ON "Ipo_Gmp"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Gmp_ipo_id_key" ON "Ipo_Gmp"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Gmp_Values_id_key" ON "Gmp_Values"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Gmp_Values_gmp_id_key" ON "Gmp_Values"("gmp_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Anchor_id_key" ON "Ipo_Anchor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Anchor_ipo_id_key" ON "Ipo_Anchor"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Dates_id_key" ON "Ipo_Dates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Dates_ipo_id_key" ON "Ipo_Dates"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Shares_id_key" ON "Ipo_Shares"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Shares_ipo_id_key" ON "Ipo_Shares"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Finances_id_key" ON "Ipo_Finances"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Finances_ipo_id_key" ON "Ipo_Finances"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Subscriptions_id_key" ON "Ipo_Subscriptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Subscriptions_ipo_id_key" ON "Ipo_Subscriptions"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_FinProgress_id_key" ON "Ipo_FinProgress"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_FinProgress_ipo_id_key" ON "Ipo_FinProgress"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Financial_Details_id_key" ON "Financial_Details"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Financial_Details_ipoFinProgress_id_key" ON "Financial_Details"("ipoFinProgress_id");

-- AddForeignKey
ALTER TABLE "Ipo_Tracker" ADD CONSTRAINT "Ipo_Tracker_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Prices" ADD CONSTRAINT "Ipo_Prices_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_ContactDetails" ADD CONSTRAINT "Ipo_ContactDetails_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Lots" ADD CONSTRAINT "Ipo_Lots_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_OtherDetails" ADD CONSTRAINT "Ipo_OtherDetails_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Review" ADD CONSTRAINT "Ipo_Review_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Reservations" ADD CONSTRAINT "Ipo_Reservations_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Gmp" ADD CONSTRAINT "Ipo_Gmp_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gmp_Values" ADD CONSTRAINT "Gmp_Values_gmp_id_fkey" FOREIGN KEY ("gmp_id") REFERENCES "Ipo_Gmp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Anchor" ADD CONSTRAINT "Ipo_Anchor_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Dates" ADD CONSTRAINT "Ipo_Dates_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Shares" ADD CONSTRAINT "Ipo_Shares_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Finances" ADD CONSTRAINT "Ipo_Finances_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Subscriptions" ADD CONSTRAINT "Ipo_Subscriptions_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_FinProgress" ADD CONSTRAINT "Ipo_FinProgress_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Financial_Details" ADD CONSTRAINT "Financial_Details_ipoFinProgress_id_fkey" FOREIGN KEY ("ipoFinProgress_id") REFERENCES "Ipo_FinProgress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
