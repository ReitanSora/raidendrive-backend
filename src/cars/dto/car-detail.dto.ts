import { IsNumber, IsString } from "class-validator";

export class CarDetailDto {

    @IsNumber()
    mileage: number;

    @IsString()
    description: string;

    @IsString()
    image_url: string;

    @IsString()
    status: string;

    @IsString()
    location: string;

    @IsString()
    fuel_type: string;

    @IsString()
    transmission: string;

    @IsNumber()
    price: number;

    constructor(car: any){
        this.mileage = car[0].mileage;
        this.description = car[0].description;
        this.image_url = car[0].image_url;
        this.status = car[0].status;
        this.location = car[0].location;
        this.fuel_type = car[0].fuel_type;
        this.transmission = car[0].transmission;
        this.price = car[0].price;
    }
};
