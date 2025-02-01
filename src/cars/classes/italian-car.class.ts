import { EuropeanCar } from './european-car.abstract';

export class ItalianCar extends EuropeanCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'IT';
        this.description = `${this.description} Italia. ${data.description}`;
    }
}