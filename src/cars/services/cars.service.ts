import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "../dto/create-car.dto";
import { PrismaClient } from "@prisma/client";
import { CarDto } from "../dto/car.dto";
import { UpdateCarDto } from "../dto/update-car.dto";
import { Car } from "../classes/car.abstract";

const prisma = new PrismaClient();

@Injectable()
export class CarsService {

    async getCar(idCar: string) {
        const car = await prisma.car.findFirst({
            where: {
                id: BigInt(idCar),
            },
            include: {
                car_detail: true,
            }
        });
        console.log(typeof car)

        return new CarDto(car);
    }

    async getCars() {
        const cars = await prisma.car.findMany({
            include: {
                car_detail: true
            }
        })

        return cars.map(car => new CarDto(car));
    }

    async getCarComparison(idCar1: string, idCar2: string) {

        const ids = [BigInt(idCar1), BigInt(idCar2)];

        const result = await prisma.car.findMany({
            where: {
                id: { in: ids },
            },
            include: {
                car_detail: true
            }
        })

        return ids.map(id => result.find(car => car.id === id)).map(car => new CarDto(car));
    }

    async createCar(car: any) {
        const newCar = await prisma.car.create({
            data: {
                brand: car.brand,
                model: car.model,
                year: car.year
            }
        });
        await prisma.car_detail.create({
            data: {
                manufactured_region_iso: car.manufactured_region_iso || '',
                manufactured_country_iso: car.manufactured_country_iso || '',
                bodywork: car.bodywork,
                door_number: car.door_number,
                engine_name: car.engine_name,
                engine_type: car.engine_type,
                engine_position: car.engine_position,
                engine_size_cc: car.engine_size_cc,
                feeding: car.feeding,
                max_power_hp: car.max_power_hp,
                max_power_revolutions_rpm: car.max_power_revolutions_rpm,
                max_torque_nm: car.max_torque_nm,
                max_torque_revolutions_rpm: car.max_torque_revolutions_rpm,
                traction: car.traction,
                gearbox_type: car.gearbox_type,
                number_of_gears: car.number_of_gears,
                top_speed_kmh: car.top_speed_kmh,
                acceleration_0_100_s: car.acceleration_0_100_s,
                front_brake_type: car.front_brake_type,
                rear_brake_type: car.rear_brake_type,
                front_suspension_type: car.front_suspension_type,
                rear_suspension_type: car.rear_suspension_type,
                tires_type: car.tires_type,
                front_tires_type: car.front_tires_type,
                rear_tires_type: car.rear_tires_type,
                color: car.color,
                weight_k: car.weight_k,
                car_id: newCar.id,
                price: car.price,
                mileage_km: car.mileage_km,
                description: car.description,
                image_url: car.image_url,
                status: car.status,
                location: car.location,
                fuel_type: car.fuel_type,
            }
        });


        return 'Car created successfully!'
    }

    async updateCar(id: string, car: UpdateCarDto) {
        const result = await prisma.car.update({
            where: {
                id: BigInt(id)
            },
            data: {
                car_detail: {
                    updateMany: {
                        where: {
                            car_id: BigInt(id)
                        },
                        data: {
                            ...car
                        }
                    }
                }
            },
            include: {
                car_detail: true,
            }
        });

        return new CarDto(result);
    }

    async deleteCar(id: string) {

        try {
            await prisma.$transaction([
                prisma.car_detail.deleteMany({
                    where: {
                        car_id: BigInt(id)
                    }
                }),
                prisma.car.delete({
                    where: {
                        id: BigInt(id)
                    }
                })
            ]);
        } catch (error) {
            throw error
        }

        return 'Car deleted successfully';
    }
}