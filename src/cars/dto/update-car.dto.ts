import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCarDto {

    @IsNumber()
    @IsOptional()
    price: number;

    @IsString()
    @IsOptional()
    description: string;
};
