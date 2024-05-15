-- CreateTable
CREATE TABLE "Active_Sessions" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,

    CONSTRAINT "Active_Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Active_Sessions_email_key" ON "Active_Sessions"("email");
