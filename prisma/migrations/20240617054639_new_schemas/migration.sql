/*
  Warnings:

  - The primary key for the `Ipo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `face_value` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `fresh_issue` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `issue_type` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `listing_at` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `lot_size` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `objectIssueData` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `pre_open_bse` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `pre_open_nse` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `priceband_max` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `priceband_min` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the column `total_issue` on the `Ipo` table. All the data in the column will be lost.
  - You are about to drop the `Financial_Details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Anchor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_ContactDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Dates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_FinProgress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Finances` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Gmp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Lots` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_OtherDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Prices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Reservations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Shares` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Subscriptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ipo_Tracker` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ipo_id]` on the table `Ipo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `closing_date` to the `Ipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipo_id` to the `Ipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_date` to the `Ipo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `series` on the `Ipo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Ipo_Series" AS ENUM ('main', 'sme');

-- DropForeignKey
ALTER TABLE "Financial_Details" DROP CONSTRAINT "Financial_Details_ipoFinProgress_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Anchor" DROP CONSTRAINT "Ipo_Anchor_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_ContactDetails" DROP CONSTRAINT "Ipo_ContactDetails_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Dates" DROP CONSTRAINT "Ipo_Dates_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_FinProgress" DROP CONSTRAINT "Ipo_FinProgress_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Finances" DROP CONSTRAINT "Ipo_Finances_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Gmp" DROP CONSTRAINT "Ipo_Gmp_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Lots" DROP CONSTRAINT "Ipo_Lots_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_OtherDetails" DROP CONSTRAINT "Ipo_OtherDetails_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Prices" DROP CONSTRAINT "Ipo_Prices_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Reservations" DROP CONSTRAINT "Ipo_Reservations_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Review" DROP CONSTRAINT "Ipo_Review_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Shares" DROP CONSTRAINT "Ipo_Shares_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Subscriptions" DROP CONSTRAINT "Ipo_Subscriptions_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Ipo_Tracker" DROP CONSTRAINT "Ipo_Tracker_ipo_id_fkey";

-- DropForeignKey
ALTER TABLE "Suggested_Ipo" DROP CONSTRAINT "Suggested_Ipo_ipo_id_fkey";

-- DropIndex
DROP INDEX "Ipo_id_key";

-- AlterTable
ALTER TABLE "Ipo" DROP CONSTRAINT "Ipo_pkey",
DROP COLUMN "description",
DROP COLUMN "face_value",
DROP COLUMN "fresh_issue",
DROP COLUMN "id",
DROP COLUMN "issue_type",
DROP COLUMN "listing_at",
DROP COLUMN "lot_size",
DROP COLUMN "objectIssueData",
DROP COLUMN "pre_open_bse",
DROP COLUMN "pre_open_nse",
DROP COLUMN "priceband_max",
DROP COLUMN "priceband_min",
DROP COLUMN "total_issue",
ADD COLUMN     "closing_date" TEXT NOT NULL,
ADD COLUMN     "ipo_id" TEXT NOT NULL,
ADD COLUMN     "opening_date" TEXT NOT NULL,
DROP COLUMN "series",
ADD COLUMN     "series" "Ipo_Series" NOT NULL,
ADD CONSTRAINT "Ipo_pkey" PRIMARY KEY ("ipo_id");

-- DropTable
DROP TABLE "Financial_Details";

-- DropTable
DROP TABLE "Ipo_Anchor";

-- DropTable
DROP TABLE "Ipo_ContactDetails";

-- DropTable
DROP TABLE "Ipo_Dates";

-- DropTable
DROP TABLE "Ipo_FinProgress";

-- DropTable
DROP TABLE "Ipo_Finances";

-- DropTable
DROP TABLE "Ipo_Gmp";

-- DropTable
DROP TABLE "Ipo_Lots";

-- DropTable
DROP TABLE "Ipo_OtherDetails";

-- DropTable
DROP TABLE "Ipo_Prices";

-- DropTable
DROP TABLE "Ipo_Reservations";

-- DropTable
DROP TABLE "Ipo_Review";

-- DropTable
DROP TABLE "Ipo_Shares";

-- DropTable
DROP TABLE "Ipo_Subscriptions";

-- DropTable
DROP TABLE "Ipo_Tracker";

-- CreateTable
CREATE TABLE "Ipo_Details" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "ipo_date" TEXT NOT NULL,
    "listing_date" TEXT NOT NULL,
    "face_value" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "lot_size" TEXT NOT NULL,
    "total_issue_size" TEXT NOT NULL,
    "fresh_issue" TEXT NOT NULL,
    "issue_type" TEXT NOT NULL,
    "listing_at" TEXT NOT NULL,
    "share_holding_pre_issue" TEXT NOT NULL,
    "share_holding_post_issue" TEXT NOT NULL,
    "market_maker_portion" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "objectOfIssue" TEXT NOT NULL,

    CONSTRAINT "Ipo_Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_reservation" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "retail_shares_offerred" TEXT NOT NULL,
    "other_shares_offerred" TEXT NOT NULL,
    "total_shares_offerred" TEXT NOT NULL,
    "qib_shares_offerred" TEXT NOT NULL,
    "anchor_shares_offerred" TEXT NOT NULL,
    "market_maker_shares_offerred" TEXT NOT NULL,
    "nii_hnii_shares_offerred" TEXT NOT NULL,

    CONSTRAINT "Ipo_reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Timeline" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "open_date" TEXT NOT NULL,
    "close_date" TEXT NOT NULL,
    "basis_of_allotment" TEXT NOT NULL,
    "initiation_of_refunds" TEXT NOT NULL,
    "credit_of_shares_to_demat" TEXT NOT NULL,
    "listing_date" TEXT NOT NULL,
    "cutoff_time_for_upi_mandate" TEXT NOT NULL,

    CONSTRAINT "Ipo_Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Lotsize" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "application" TEXT[],
    "lots" TEXT[],
    "shares" TEXT[],
    "amount" TEXT[],

    CONSTRAINT "Ipo_Lotsize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_PromoterHolding" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "shareholding_preissue" TEXT NOT NULL,
    "shareholding_postissue" TEXT NOT NULL,

    CONSTRAINT "Ipo_PromoterHolding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Financials" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "period_ended" TEXT[],
    "assets" TEXT[],
    "revenue" TEXT[],
    "profit_after_tax" TEXT[],
    "net_worth" TEXT[],
    "reserves_and_surplus" TEXT[],
    "total_borrowing" TEXT[],

    CONSTRAINT "Ipo_Financials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Kpi" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "roe" TEXT NOT NULL,
    "roce" TEXT NOT NULL,
    "ronw" TEXT NOT NULL,
    "pbv" TEXT NOT NULL,
    "pat_marin_percent" TEXT NOT NULL,
    "eps_rs_preIpo" TEXT NOT NULL,
    "eps_rs_postIpo" TEXT NOT NULL,
    "pe_preIpo" TEXT NOT NULL,
    "pe_postIpo" TEXT NOT NULL,

    CONSTRAINT "Ipo_Kpi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipo_Contact" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Ipo_Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registrar_Contact" (
    "id" TEXT NOT NULL,
    "ipo_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Registrar_Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Details_id_key" ON "Ipo_Details"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Details_ipo_id_key" ON "Ipo_Details"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_reservation_id_key" ON "Ipo_reservation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_reservation_ipo_id_key" ON "Ipo_reservation"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Timeline_id_key" ON "Ipo_Timeline"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Timeline_ipo_id_key" ON "Ipo_Timeline"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Lotsize_id_key" ON "Ipo_Lotsize"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Lotsize_ipo_id_key" ON "Ipo_Lotsize"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_PromoterHolding_id_key" ON "Ipo_PromoterHolding"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_PromoterHolding_ipo_id_key" ON "Ipo_PromoterHolding"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Financials_id_key" ON "Ipo_Financials"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Financials_ipo_id_key" ON "Ipo_Financials"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Kpi_id_key" ON "Ipo_Kpi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Kpi_ipo_id_key" ON "Ipo_Kpi"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Contact_id_key" ON "Ipo_Contact"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_Contact_ipo_id_key" ON "Ipo_Contact"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Registrar_Contact_id_key" ON "Registrar_Contact"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Registrar_Contact_ipo_id_key" ON "Registrar_Contact"("ipo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_ipo_id_key" ON "Ipo"("ipo_id");

-- AddForeignKey
ALTER TABLE "Ipo_Details" ADD CONSTRAINT "Ipo_Details_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_reservation" ADD CONSTRAINT "Ipo_reservation_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Timeline" ADD CONSTRAINT "Ipo_Timeline_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Lotsize" ADD CONSTRAINT "Ipo_Lotsize_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_PromoterHolding" ADD CONSTRAINT "Ipo_PromoterHolding_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Financials" ADD CONSTRAINT "Ipo_Financials_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Kpi" ADD CONSTRAINT "Ipo_Kpi_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ipo_Contact" ADD CONSTRAINT "Ipo_Contact_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registrar_Contact" ADD CONSTRAINT "Registrar_Contact_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suggested_Ipo" ADD CONSTRAINT "Suggested_Ipo_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("ipo_id") ON DELETE CASCADE ON UPDATE CASCADE;
