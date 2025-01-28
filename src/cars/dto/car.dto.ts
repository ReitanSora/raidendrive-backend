import { IsNotEmpty, IsString } from "class-validator";
import { CarDetailDto } from "./car-detail.dto";


export class CarDto {

    @IsString()
    id: string;

    @IsString()
    brand: string;

    @IsString()
    model: string;

    @IsString()
    year: string;

    @IsNotEmpty()
    details: CarDetailDto;

    constructor(car: any) {
        this.id = car.id.toString();
        this.brand = car.brand;
        this.model = car.model;
        this.year = car.year;
        this.details = new CarDetailDto(car.details);
    }
};