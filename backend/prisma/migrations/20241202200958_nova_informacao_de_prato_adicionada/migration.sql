/*
  Warnings:

  - Added the required column `categoria` to the `Bebida` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Refeicao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Sobremesa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bebida" ADD COLUMN     "categoria" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Refeicao" ADD COLUMN     "categoria" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sobremesa" ADD COLUMN     "categoria" TEXT NOT NULL;
