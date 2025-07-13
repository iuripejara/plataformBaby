/*
  Warnings:

  - You are about to alter the column `peso` on the `Peso` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Peso" ALTER COLUMN "peso" SET DATA TYPE DECIMAL(65,30);
