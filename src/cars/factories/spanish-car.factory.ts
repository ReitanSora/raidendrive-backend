import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { SpanishCar } from '../classes/spanish-car.class';

export class SpanishCarFactory implements CarFactory {

  createCar(data: CreateCarDto): SpanishCar {
    return new SpanishCar(data);
  }
}