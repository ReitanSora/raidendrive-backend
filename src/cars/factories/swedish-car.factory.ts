import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { SwedishCar } from '../classes/swedish-car.class';

export class SwedishCarFactory implements CarFactory {

  createCar(data: CreateCarDto): SwedishCar {
    return new SwedishCar(data);
  }
}