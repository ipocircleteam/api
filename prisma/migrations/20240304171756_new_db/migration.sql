/*
  Warnings:

  - The values [MAIN,SME] on the enum `IPO_Series` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `anchor_shares_offerred` on the `Ipo_Anchor` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to drop the column `shares_offerres` on the `Ipo_Reservations` table. All the data in the column will be lost.
  - The `category` column on the `Ipo_Reservations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `anchor_shares_offerred` on the `Ipo_Shares` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `qib_shares_offerred` on the `Ipo_Shares` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `nii_bnii_shares_offerred` on the `Ipo_Shares` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `nii_snii_shares_offerred` on the `Ipo_Shares` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `retail_shares_offerred` on the `Ipo_Shares` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "IPO_Series_new" AS ENUM ('main', 'sme');
ALTER TABLE "Ipo" ALTER COLUMN "series" TYPE "IPO_Series_new" USING ("series"::text::"IPO_Series_new");
ALTER TYPE "IPO_Series" RENAME TO "IPO_Series_old";
ALTER TYPE "IPO_Series_new" RENAME TO "IPO_Series";
DROP TYPE "IPO_Series_old";
COMMIT;

-- AlterTable
ALTER TABLE "Ipo_Anchor" ALTER COLUMN "anchor_shares_offerred" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Ipo_Lots" ADD COLUMN     "category" TEXT[],
ADD COLUMN     "lots_max" INTEGER[],
ADD COLUMN     "lots_min" INTEGER[],
ADD COLUMN     "max_bhni_lots" INTEGER[],
ADD COLUMN     "max_bhni_price" INTEGER[],
ADD COLUMN     "max_bhni_shares" INTEGER[],
ADD COLUMN     "max_retail_lots" INTEGER[],
ADD COLUMN     "max_retail_price" INTEGER[],
ADD COLUMN     "max_retail_shares" INTEGER[],
ADD COLUMN     "max_shni_lots" INTEGER[],
ADD COLUMN     "max_shni_price" INTEGER[],
ADD COLUMN     "max_shni_shares" INTEGER[],
ADD COLUMN     "min_bhni_lots" INTEGER[],
ADD COLUMN     "min_bhni_price" INTEGER[],
ADD COLUMN     "min_bhni_shares" INTEGER[],
ADD COLUMN     "min_retail_lots" INTEGER[],
ADD COLUMN     "min_retail_price" INTEGER[],
ADD COLUMN     "min_retail_shares" INTEGER[],
ADD COLUMN     "min_shni_lots" INTEGER[],
ADD COLUMN     "min_shni_price" INTEGER[],
ADD COLUMN     "min_shni_shares" INTEGER[];

-- AlterTable
ALTER TABLE "Ipo_Reservations" DROP COLUMN "shares_offerres",
ADD COLUMN     "shares_offerred" INTEGER[],
DROP COLUMN "category",
ADD COLUMN     "category" TEXT[];

-- AlterTable
ALTER TABLE "Ipo_Shares" ALTER COLUMN "anchor_shares_offerred" SET DATA TYPE INTEGER,
ALTER COLUMN "qib_shares_offerred" SET DATA TYPE INTEGER,
ALTER COLUMN "nii_bnii_shares_offerred" SET DATA TYPE INTEGER,
ALTER COLUMN "nii_snii_shares_offerred" SET DATA TYPE INTEGER,
ALTER COLUMN "retail_shares_offerred" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Ipo_Subscriptions" ALTER COLUMN "shares_bid" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "qib" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "nii_snii" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "nii_bnii" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "retail" SET DATA TYPE DECIMAL(65,30);
