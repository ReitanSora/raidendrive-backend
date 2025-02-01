import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { FrenchCar } from '../classes/french-car.class';

export class FrenchCarFactory implements CarFactory {

  createCar(data: CreateCarDto): FrenchCar {
    return new FrenchCar(data);
  }
}