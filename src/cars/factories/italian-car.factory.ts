import { CarFactory } from './car-factory.interface';
import { CreateCarDto } from '../dto/create-car.dto';
import { ItalianCar } from '../classes/italian-car.class';

export class ItalianCarFactory implements CarFactory {

  createCar(data: CreateCarDto): ItalianCar {
    return new ItalianCar(data);
  }
}