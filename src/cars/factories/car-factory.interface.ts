import { CreateCarDto } from "../dto/create-car.dto";

export interface CarFactory{
    createCar(data: CreateCarDto): Object;
}