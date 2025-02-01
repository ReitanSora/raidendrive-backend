/*
  Warnings:

  - The `image_url` column on the `car_detail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `manufactured_country_iso` to the `car_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car_detail" ADD COLUMN     "manufactured_country_iso" TEXT NOT NULL;
