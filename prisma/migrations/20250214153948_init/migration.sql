/*
  Warnings:

  - You are about to drop the column `user_rol` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_rol",
ADD COLUMN     "user_role" VARCHAR(255) NOT NULL DEFAULT 'client';
