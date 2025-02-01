import { EuropeanCar } from './european-car.abstract';

export class FrenchCar extends EuropeanCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'FR';
        this.description = `${this.description} Francia. ${data.description}`;
        
    }
}