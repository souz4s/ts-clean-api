/*
  Warnings:

  - The primary key for the `musicalgenres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `musicalgenres` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `musicalGenresId` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[musicalGenreId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `musicalGenreId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_musicalGenresId_fkey`;

-- DropIndex
DROP INDEX `MusicalGenres_id_key` ON `musicalgenres`;

-- DropIndex
DROP INDEX `Users_id_key` ON `users`;

-- AlterTable
ALTER TABLE `musicalgenres` DROP PRIMARY KEY,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `updateAt` DATETIME(3) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `musicalGenresId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `musicalGenreId` INTEGER NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_musicalGenreId_key` ON `Users`(`musicalGenreId`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_musicalGenreId_fkey` FOREIGN KEY (`musicalGenreId`) REFERENCES `MusicalGenres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
