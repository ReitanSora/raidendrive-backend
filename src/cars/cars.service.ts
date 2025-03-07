import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { PrismaClient } from "@prisma/client";
import { CarDto } from "./dto/car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

/**
 * Attribute allowing creation of a prisma client
 */
const prisma = new PrismaClient();

/**
 * Car management service
 * Contains logic for creating, reading, modifying and deleting cars
 */
@Injectable()
export class CarsService {

    /**
     * Gets all information of a car, based on its id
     * @param {string} idCar - Car ID to search for
     * @returns {Promise<CarDto>} Promise that resolves an object of CarDto class
     */
    async getCar(idCar: string): Promise<CarDto> {
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

    /**
     * Get all information of all cars registered in the database
     * @returns {Promise<CarDto[]>} Promise that resolves an array of CarDto objects of all cars
     */
    async getCars(): Promise<CarDto[]> {
        const cars = await prisma.car.findMany({
            include: {
                car_detail: true
            }
        })

        return cars.map(car => new CarDto(car));
    }

    /**
     * Get all information about the two cars to compare
     * @param {string} idCar1 - Car ID of first car to compare
     * @param {string} idCar2 - Car ID of second car to compare
     * @returns {Promise<CarDto[]>} Promise that resolves an array of two CarDto objects with information of compared cars
     */
    async getCarComparison(idCar1: string, idCar2: string): Promise<CarDto[]> {

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

    /**
     * Create car, based on CreateCarDto information
     * @param {CreateCarDto} car - CreateCarDto class object
     * @returns {Promise<string>} Promise that resolves a success message
     */
    async createCar(car: CreateCarDto): Promise<string> {
        const newCar = await prisma.car.create({
            data: {
                brand: car.brand,
                model: car.model,
                year: car.year
            }
        });
        await prisma.car_detail.create({
            data: {
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

    /**
     * Modify a car, selected by its id
     * @param {string} id - Car ID of the car to be modified
     * @param {UpdateCarDto} car - UpdateCarDto class object
     * @returns {Promise<CarDto>} Promise that resolves an object of CarDto class
     */
    async updateCar(id: string, car: UpdateCarDto): Promise<CarDto> {
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

    /**
     * Delete a car, selected by its id
     * @param {string} id - Car ID of the car to be deleted
     * @returns {Promise<string>} Promise that resolves a success message
     * @throws {Error} If the Car ID does not exists
     */
    async deleteCar(id: string): Promise<string> {

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