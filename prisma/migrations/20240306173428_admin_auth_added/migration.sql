/*
  Warnings:

  - You are about to drop the `Gmp_Values` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Gmp_Values" DROP CONSTRAINT "Gmp_Values_gmp_id_fkey";

-- AlterTable
ALTER TABLE "Ipo_Gmp" ADD COLUMN     "absolute_value" DECIMAL(65,30)[],
ADD COLUMN     "instant" TIMESTAMP(3)[],
ADD COLUMN     "percent_value" DECIMAL(65,30)[];

-- DropTable
DROP TABLE "Gmp_Values";

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");
