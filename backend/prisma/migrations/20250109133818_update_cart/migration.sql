/*
  Warnings:

  - A unique constraint covering the columns `[cartId,produtosId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - Made the column `produtosId` on table `CartItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_produtosId_fkey";

-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "produtosId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_produtosId_key" ON "CartItem"("cartId", "produtosId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
