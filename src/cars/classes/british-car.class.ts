import { EuropeanCar } from './european-car.abstract';

export class BritishCar extends EuropeanCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'GB';
        this.description = `${this.description} Reino Unido. ${data.description}`;
        
    }
}