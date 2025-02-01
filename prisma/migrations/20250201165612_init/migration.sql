/*
  Warnings:

  - Added the required column `manufactured_region_iso` to the `car_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car_detail" ADD COLUMN     "manufactured_region_iso" TEXT NOT NULL;
