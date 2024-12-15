/*
  Warnings:

  - You are about to drop the column `bebidaId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `refeicaoId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `sobremesaId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `bebidaId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `refeicaoId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `sobremesaId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the `Bebida` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Refeicao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sobremesa` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,produtosId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_bebidaId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_refeicaoId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_sobremesaId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_bebidaId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_refeicaoId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_sobremesaId_fkey";

-- DropIndex
DROP INDEX "Favorite_userId_refeicaoId_sobremesaId_bebidaId_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "bebidaId",
DROP COLUMN "refeicaoId",
DROP COLUMN "sobremesaId",
ADD COLUMN     "produtosId" TEXT;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "bebidaId",
DROP COLUMN "refeicaoId",
DROP COLUMN "sobremesaId",
ADD COLUMN     "produtosId" TEXT;

-- DropTable
DROP TABLE "Bebida";

-- DropTable
DROP TABLE "Refeicao";

-- DropTable
DROP TABLE "Sobremesa";

-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ingredientes" TEXT[],
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_produtosId_key" ON "Favorite"("userId", "produtosId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "Produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "Produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
