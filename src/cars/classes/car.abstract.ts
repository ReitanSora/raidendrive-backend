export abstract class Car {
    brand: string;
    model: string;
    year: number;
    manufactured_region_iso: string;
    manufactured_country_iso: string;
    bodywork: string;
    door_number: number;
    engine_name: string;
    engine_type: string;
    engine_position: string;
    engine_size_cc: number;
    feeding: string;
    max_power_hp: number;
    max_power_revolutions_rpm: number;
    max_torque_nm: number;
    max_torque_revolutions_rpm: number;
    traction: string;
    gearbox_type: string;
    number_of_gears: number;
    top_speed_kmh: number;
    acceleration_0_100_s: number;
    front_brake_type: string;
    rear_brake_type: string;
    front_suspension_type: string;
    rear_suspension_type: string;
    tires_type: string;
    front_tires_type: string;
    rear_tires_type: string;
    color: string;
    weight_k: number;
    mileage_km: number;
    description: string;
    image_url: any[];
    status: string;
    location: string;
    fuel_type: string;
    price: number;

    constructor(data: any) {
        this.brand = data.brand;
        this.model = data.model;
        this.year = data.year;
        this.manufactured_region_iso = data.manufactured_region_iso;
        this.manufactured_country_iso = data.manufactured_country_iso;
        this.bodywork = data.bodywork;
        this.door_number = data.door_number;
        this.engine_name = data.engine_name;
        this.engine_type = data.engine_type;
        this.engine_position = data.engine_position;
        this.engine_size_cc = data.engine_size_cc;
        this.feeding = data.feeding;
        this.max_power_hp = data.max_power_hp;
        this.max_power_revolutions_rpm = data.max_power_revolutions_rpm;
        this.max_torque_nm = data.max_torque_nm;
        this.max_torque_revolutions_rpm = data.max_torque_revolutions_rpm;
        this.traction = data.traction;
        this.gearbox_type = data.gearbox_type;
        this.number_of_gears = data.number_of_gears;
        this.top_speed_kmh = data.top_speed_kmh;
        this.acceleration_0_100_s = data.acceleration_0_100_s;
        this.front_brake_type = data.front_brake_type;
        this.rear_brake_type = data.rear_brake_type;
        this.front_suspension_type = data.front_suspension_type;
        this.rear_suspension_type = data.rear_suspension_type;
        this.tires_type = data.tires_type;
        this.front_tires_type = data.front_tires_type;
        this.rear_tires_type = data.rear_tires_type;
        this.color = data.color;
        this.weight_k = data.weight_k;
        this.mileage_km = data.mileage_km;
        this.description = data.description;
        this.image_url = data.image_url;
        this.status = data.status;
        this.location = data.location;
        this.fuel_type = data.fuel_type;
        this.price = data.price;
    }

    abstract assignAttributes(data: any): void;
}