import { IsString, IsNumber, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCarDto {

    @IsString()
    @IsNotEmpty()
    brand: string;
    
    @IsString()
    @IsNotEmpty()
    model: string;

    @IsString()
    @IsNotEmpty()
    year: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    mileage: number;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsNotEmpty()
    image_url: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    location: string;
    
    @IsString()
    @IsNotEmpty()
    fuel_type: string;

    @IsString()
    @IsNotEmpty()
    transmission: string;
}