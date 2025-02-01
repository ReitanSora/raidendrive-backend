// src/cars/services/car-factory.service.ts
import { Injectable } from '@nestjs/common';
import { EuropeanCarFactory } from '../factories/european-car.factory';
import { AsianCarFactory } from '../factories/asian-car.factory';
import { CarFactory } from '../factories/car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { CarsService } from './cars.service';

@Injectable()
export class CarFactoryService {
    private carFactory: CarFactory;

    constructor(private readonly carsService: CarsService) { }

    setRegion(region: string, country: string): void {
        switch (region) {
            case 'europe':
                this.carFactory = new EuropeanCarFactory(country, this.carsService);
                break;
            case 'asia':
                this.carFactory = new AsianCarFactory(country, this.carsService);
                break;
            default:
                throw new Error('Unsupported region');
        }
    }

    async createCar(data: CreateCarDto): Promise<any> {
        if (!this.carFactory) {
            throw new Error('Factory not initialized. Please set a region first.');
        }
        const car = this.carFactory.createCar(data);
        return this.carsService.createCar(car);
    }
}