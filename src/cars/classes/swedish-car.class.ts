import { EuropeanCar } from './european-car.abstract';

export class SwedishCar extends EuropeanCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'SE';
        this.description = `${this.description} Suecia. ${data.description}`;
    }
}