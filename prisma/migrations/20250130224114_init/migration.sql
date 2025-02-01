-- CreateTable
CREATE TABLE "car" (
    "id" BIGSERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_detail" (
    "id" BIGSERIAL NOT NULL,
    "car_id" BIGINT NOT NULL,
    "bodywork" TEXT NOT NULL,
    "door_number" INTEGER NOT NULL,
    "engine_name" TEXT NOT NULL,
    "engine_type" TEXT NOT NULL,
    "engine_position" TEXT NOT NULL,
    "engine_size_cc" INTEGER NOT NULL,
    "feeding" TEXT NOT NULL,
    "max_power_hp" INTEGER NOT NULL,
    "max_power_revolutions_rpm" INTEGER NOT NULL,
    "max_torque_nm" INTEGER NOT NULL,
    "max_torque_revolutions_rpm" INTEGER NOT NULL,
    "traction" TEXT NOT NULL,
    "gearbox_type" TEXT NOT NULL,
    "number_of_gears" INTEGER NOT NULL,
    "top_speed_kmh" INTEGER NOT NULL,
    "acceleration_0_100_s" DECIMAL(65,30) NOT NULL,
    "front_brake_type" TEXT NOT NULL,
    "rear_brake_type" TEXT NOT NULL,
    "front_suspension_type" TEXT NOT NULL,
    "rear_suspension_type" TEXT NOT NULL,
    "tires_type" TEXT NOT NULL,
    "front_tires_type" TEXT NOT NULL,
    "rear_tires_type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "weight_k" INTEGER NOT NULL,
    "mileage_km" INTEGER NOT NULL,
    "description" TEXT,
    "image_url" JSONB NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "car_detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "user_id" VARCHAR(255) NOT NULL,
    "user_nickname" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "user_password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_user_email" ON "users"("user_email");

-- AddForeignKey
ALTER TABLE "car_detail" ADD CONSTRAINT "car_detail_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
