import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { JapaneseCar } from '../classes/japansese-car.class';

export class JapaneseCarFactory implements CarFactory {

  createCar(data: CreateCarDto): JapaneseCar {
    return new JapaneseCar(data);
  }
}