import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { GermanCar } from '../classes/german-car.class';

export class GermanCarFactory implements CarFactory {

  createCar(data: CreateCarDto): GermanCar {
    return new GermanCar(data);
  }
}