/*
  Warnings:

  - You are about to drop the `dictee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "dictee" DROP CONSTRAINT "dictee_authorId_fkey";

-- DropTable
DROP TABLE "dictee";

-- CreateTable
CREATE TABLE "spelling" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "spelling_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "spelling" ADD CONSTRAINT "spelling_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
