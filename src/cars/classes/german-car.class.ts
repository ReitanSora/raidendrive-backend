import { EuropeanCar } from './european-car.abstract';

export class GermanCar extends EuropeanCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'DE';
        this.description = `${this.description} Alemania. ${data.description}`;
    }
}