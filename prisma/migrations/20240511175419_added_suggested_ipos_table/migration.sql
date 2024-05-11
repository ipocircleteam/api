-- CreateTable
CREATE TABLE "Suggested_Ipo" (
    "id" SERIAL NOT NULL,
    "ipo_id" TEXT NOT NULL,

    CONSTRAINT "Suggested_Ipo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Suggested_Ipo_ipo_id_key" ON "Suggested_Ipo"("ipo_id");

-- AddForeignKey
ALTER TABLE "Suggested_Ipo" ADD CONSTRAINT "Suggested_Ipo_ipo_id_fkey" FOREIGN KEY ("ipo_id") REFERENCES "Ipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
