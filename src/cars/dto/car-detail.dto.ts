import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CarDetailDto {
    
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
    mileage: number;

    @IsString()
    @IsOptional()
    description: string;

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

    constructor(car: any){
        this.bodywork = car[0].bodywork;
        this.door_number = car[0].door_number;
        this.engine_name = car[0].engine_name;
        this.engine_type = car[0].engine_type;
        this.engine_position = car[0].engine_position;
        this.engine_size_cc = car[0].engine_size_cc;
        this.feeding = car[0].feeding;
        this.max_power_hp = car[0].max_power_hp;
        this.max_power_revolutions_rpm = car[0].max_power_revolutions_rpm;
        this.max_torque_nm = car[0].max_torque_nm;
        this.max_torque_revolutions_rpm = car[0].max_torque_revolutions_rpm;
        this.traction = car[0].traction;
        this.gearbox_type = car[0].gearbox_type;
        this.number_of_gears = car[0].number_of_gears;
        this.top_speed_kmh = car[0].top_speed_kmh;
        this.acceleration_0_100_s = car[0].acceleration_0_100_s;
        this.front_brake_type = car[0].front_brake_type;
        this.rear_brake_type = car[0].rear_brake_type;
        this.front_suspension_type = car[0].front_suspension_type;
        this.rear_suspension_type = car[0].rear_suspension_type;
        this.tires_type = car[0].tires_type;
        this.front_tires_type = car[0].front_tires_type;
        this.rear_tires_type = car[0].rear_tires_type;
        this.color = car[0].color;
        this.weight_k = car[0].weight_k
        this.mileage = car[0].mileage_km;
        this.description = car[0].description;
        this.image_url = car[0].image_url;
        this.status = car[0].status;
        this.location = car[0].location;
        this.fuel_type = car[0].fuel_type;
        this.price = car[0].price;
    }
};
