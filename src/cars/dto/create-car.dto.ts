import { IsString, IsNumber, IsNotEmpty, IsOptional, ArrayNotEmpty, IsArray } from "class-validator";

export class CreateCarDto {

    @IsString()
    @IsNotEmpty()
    brand: string;
    
    @IsString()
    @IsNotEmpty()
    model: string;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsString()
    @IsOptional()
    manufactured_region_iso?: string;
    
    @IsString()
    @IsOptional()
    manufactured_country_iso?: string;

    @IsString()
    @IsNotEmpty()
    bodywork: string;
    
    @IsNumber()
    @IsNotEmpty()
    door_number: number;
    
    @IsString()
    @IsNotEmpty()
    engine_name: string;
    
    @IsString()
    @IsNotEmpty()
    engine_type: string;
    
    @IsString()
    @IsNotEmpty()
    engine_position: string;
    
    @IsNumber()
    @IsNotEmpty()
    engine_size_cc: number;
    
    @IsString()
    @IsNotEmpty()
    feeding: string;
    
    @IsNumber()
    @IsNotEmpty()
    max_power_hp: number;
    
    @IsNumber()
    @IsNotEmpty()
    max_power_revolutions_rpm: number;
    
    @IsNumber()
    @IsNotEmpty()
    max_torque_nm: number;
    
    @IsNumber()
    @IsNotEmpty()
    max_torque_revolutions_rpm: number;
    
    @IsString()
    @IsNotEmpty()
    traction: string;
    
    @IsString()
    @IsNotEmpty()
    gearbox_type: string;
    
    @IsNumber()
    @IsNotEmpty()
    number_of_gears: number;
    
    @IsNumber()
    @IsNotEmpty()
    top_speed_kmh: number;
    
    @IsNumber()
    @IsNotEmpty()
    acceleration_0_100_s: number;
    
    @IsString()
    @IsNotEmpty()
    front_brake_type: string;
    
    @IsString()
    @IsNotEmpty()
    rear_brake_type: string;
    
    @IsString()
    @IsNotEmpty()
    front_suspension_type: string;
    
    @IsString()
    @IsNotEmpty()
    rear_suspension_type: string;
    
    @IsString()
    @IsNotEmpty()
    tires_type: string;
    
    @IsString()
    @IsNotEmpty()
    front_tires_type: string;
    
    @IsString()
    @IsNotEmpty()
    rear_tires_type: string;
    
    @IsString()
    @IsNotEmpty()
    color: string;
    
    @IsNumber()
    @IsNotEmpty()
    weight_k: number;

    @IsNumber()
    @IsNotEmpty()
    mileage_km: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @ArrayNotEmpty()
    image_url: any[];

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsNotEmpty()
    fuel_type: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}