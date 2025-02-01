import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { BritishCar } from '../classes/british-car.class';

export class BritishCarFactory implements CarFactory {

  createCar(data: CreateCarDto): BritishCar {
    return new BritishCar(data);
  }
}