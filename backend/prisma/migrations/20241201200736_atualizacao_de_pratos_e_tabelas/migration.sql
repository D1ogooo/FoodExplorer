/*
  Warnings:

  - You are about to drop the column `productId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,refeicaoId,sobremesaId,bebidaId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_productId_fkey";

-- DropIndex
DROP INDEX "Favorite_userId_productId_key";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "productId",
ADD COLUMN     "bebidaId" TEXT,
ADD COLUMN     "refeicaoId" TEXT,
ADD COLUMN     "sobremesaId" TEXT;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "productId",
ADD COLUMN     "bebidaId" TEXT,
ADD COLUMN     "refeicaoId" TEXT,
ADD COLUMN     "sobremesaId" TEXT;

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Refeicao" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Refeicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sobremesa" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Sobremesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bebida" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Bebida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_refeicaoId_sobremesaId_bebidaId_key" ON "Favorite"("userId", "refeicaoId", "sobremesaId", "bebidaId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "Refeicao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_sobremesaId_fkey" FOREIGN KEY ("sobremesaId") REFERENCES "Sobremesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_bebidaId_fkey" FOREIGN KEY ("bebidaId") REFERENCES "Bebida"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "Refeicao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_sobremesaId_fkey" FOREIGN KEY ("sobremesaId") REFERENCES "Sobremesa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_bebidaId_fkey" FOREIGN KEY ("bebidaId") REFERENCES "Bebida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
