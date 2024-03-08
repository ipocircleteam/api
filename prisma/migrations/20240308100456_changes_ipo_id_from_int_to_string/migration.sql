/*
  Warnings:

  - The primary key for the `Ipo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
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

-- AlterTable
ALTER TABLE "Ipo" DROP CONSTRAINT "Ipo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ipo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ipo_id_seq";

-- AlterTable
ALTER TABLE "Ipo_Anchor" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_ContactDetails" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Dates" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_FinProgress" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Finances" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Gmp" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Lots" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_OtherDetails" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Prices" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Reservations" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Review" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Shares" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Subscriptions" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Ipo_Tracker" ALTER COLUMN "ipo_id" SET DATA TYPE TEXT;

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
