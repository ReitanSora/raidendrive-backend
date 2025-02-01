import { Car } from './car.abstract';

export abstract class EuropeanCar extends Car {

    constructor(data: any){
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any) : void {
        this.manufactured_region_iso = 'EU';
        this.description = `Auto Europeo, manufacturado en`;
    }

}