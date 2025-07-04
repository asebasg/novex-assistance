-- DropForeignKey
ALTER TABLE `Attendance` DROP FOREIGN KEY `Attendance_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Report` DROP FOREIGN KEY `Report_employeeId_fkey`;

-- DropIndex
DROP INDEX `Attendance_employeeId_fkey` ON `Attendance`;

-- DropIndex
DROP INDEX `Employee_userId_fkey` ON `Employee`;

-- DropIndex
DROP INDEX `Report_employeeId_fkey` ON `Report`;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
