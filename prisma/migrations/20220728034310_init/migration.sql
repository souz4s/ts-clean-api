-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `musicalGenresId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_musicalGenresId_key`(`musicalGenresId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MusicalGenres` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `MusicalGenres_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_musicalGenresId_fkey` FOREIGN KEY (`musicalGenresId`) REFERENCES `MusicalGenres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
