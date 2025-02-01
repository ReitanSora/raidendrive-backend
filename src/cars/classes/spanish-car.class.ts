import { EuropeanCar } from './european-car.abstract';

export class SpanishCar extends EuropeanCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'ES';
        this.description = `${this.description} España. ${data.description}`;
    }
}