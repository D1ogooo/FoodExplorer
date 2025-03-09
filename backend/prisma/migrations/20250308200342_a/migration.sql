/*
  Warnings:

  - You are about to drop the column `favorite` on the `Produtos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Produtos" DROP COLUMN "favorite",
ADD COLUMN     "favoriteItem" BOOLEAN NOT NULL DEFAULT false;
