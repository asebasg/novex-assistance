/*
  Warnings:

  - Made the column `userId` on table `Report` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Report` DROP FOREIGN KEY `Report_userId_fkey`;

-- DropIndex
DROP INDEX `Report_userId_fkey` ON `Report`;

-- AlterTable
ALTER TABLE `Report` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
