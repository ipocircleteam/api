/*
  Warnings:

  - You are about to drop the column `email` on the `Active_Sessions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Active_Sessions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Active_Sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Active_Sessions_email_key";

-- AlterTable
ALTER TABLE "Active_Sessions" DROP COLUMN "email",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Active_Sessions_userId_key" ON "Active_Sessions"("userId");
