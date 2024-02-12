/*
  Warnings:

  - Made the column `content` on table `dictee` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "dictee" ALTER COLUMN "content" SET NOT NULL;
