import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCarDto {

    @IsNumber()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @IsOptional()
    image_url?: any[];

};
