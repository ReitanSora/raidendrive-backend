import { AsianCar } from '../classes/asian-car.abstract';

export class JapaneseCar extends AsianCar {

    constructor(data: any) {
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any): void {
        super.assignAttributes(data);
        this.manufactured_country_iso = 'JP';
        this.description = `${this.description} Japón. ${data.description}`;
    }
}