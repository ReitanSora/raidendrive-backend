import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { CarsService } from '../services/cars.service';
import { JapaneseCarFactory } from './japanese-car.factory';

export class AsianCarFactory implements CarFactory {
    private carFactory: CarFactory;

    constructor(private readonly country:string, private readonly carsService: CarsService) {
        this.setCountry(country);
    }

    setCountry(country: string): void {
        switch (country) {
            case 'japan':
                this.carFactory = new JapaneseCarFactory();
                break;
            default:
                throw new Error('Unsupported Asian country');
        }
    }

    createCar(data: CreateCarDto): any {
        if (!this.carFactory) {
            throw new Error('Factory not initialized. Please set a country first.');
        }

        return this.carFactory.createCar(data);
    }
}