import { CarFactory } from './car-factory.interface';
import { GermanCarFactory } from './german-car.factory';
import { BritishCarFactory } from './british-car.factory';
import { FrenchCarFactory } from './french-car.factory';
import { CreateCarDto } from '../dto/create-car.dto';
import { CarsService } from '../services/cars.service';
import { SpanishCarFactory } from './spanish-car.factory';
import { SwedishCarFactory } from './swedish-car.factory';
import { ItalianCarFactory } from './italian-car.factory';

export class EuropeanCarFactory implements CarFactory {
    private carFactory: CarFactory;

    constructor(private readonly country:string, private readonly carsService: CarsService) {
        this.setCountry(country);
    }

    setCountry(country: string): void {
        switch (country) {
            case 'spain':
                this.carFactory = new SpanishCarFactory();
                break;
            case 'germany':
                this.carFactory = new GermanCarFactory();
                break;
            case 'uk':
                this.carFactory = new BritishCarFactory();
                break;
            case 'france':
                this.carFactory = new FrenchCarFactory();
                break;
            case 'sweden':
                this.carFactory = new SwedishCarFactory();
                break;
            case 'italy':
                this.carFactory = new ItalianCarFactory();
                break;
            default:
                throw new Error('Unsupported European country');
        }
    }

    createCar(data: CreateCarDto): any {
        if (!this.carFactory) {
            throw new Error('Factory not initialized. Please set a country first.');
        }

        return this.carFactory.createCar(data);
    }
}