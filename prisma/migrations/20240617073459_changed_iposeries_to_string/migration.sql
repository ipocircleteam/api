/*
  Warnings:

  - Changed the type of `series` on the `Ipo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ipo" DROP COLUMN "series",
ADD COLUMN     "series" TEXT NOT NULL;
