/*
  Warnings:

  - You are about to drop the column `userId` on the `Report` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Report` DROP FOREIGN KEY `Report_userId_fkey`;

-- DropIndex
DROP INDEX `Report_userId_fkey` ON `Report`;

-- AlterTable
ALTER TABLE `Report` DROP COLUMN `userId`;
