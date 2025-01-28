import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";

import { PrismaClient } from "@prisma/client";
import { CarDto } from "./dto/car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

const prisma = new PrismaClient();

@Injectable()
export class CarsService {

    async getCar(idCar: string) {
        const car = await prisma.car.findFirst({
            where: {
                id: BigInt(idCar),
            },
            include: {
                details: true,
            }
        });

        return new CarDto(car);
    }

    async getCars() {
        const cars = await prisma.car.findMany({
            include: {
                details: true
            }
        })

        return cars.map(car => new CarDto(car));
    }

    async getCarComparison(idCar1: string, idCar2: string) {
        const result = await prisma.car.findMany({
            where: {
                id: { in: [BigInt(idCar1), BigInt(idCar2)] },
            },
            include: {
                details: true
            }
        })

        return result.map(car => new CarDto(car));
    }

    async createCar(car: CreateCarDto) {
        const newCar = await prisma.car.create({
            data: {
                brand: car.brand,
                model: car.model,
                year: car.year
            }
        });
        await prisma.car_detail.create({
            data: {
                car_id: newCar.id,
                price: car.price,
                mileage: car.mileage,
                description: car.description,
                image_url: car.image_url,
                status: car.status,
                location: car.location,
                fuel_type: car.fuel_type,
                transmission: car.transmission
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
                details: {
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
                details: true,
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