/*
  Warnings:

  - Made the column `produtosId` on table `Favorite` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_produtosId_fkey";

-- AlterTable
ALTER TABLE "Favorite" ALTER COLUMN "produtosId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
