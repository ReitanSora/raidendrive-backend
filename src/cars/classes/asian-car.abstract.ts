import { Car } from './car.abstract';

export abstract class AsianCar extends Car {

    constructor(data: any){
        super(data);
        this.assignAttributes(data);
    }

    assignAttributes(data: any) : void {
        this.manufactured_region_iso = 'AS';
        this.description = `Auto Asiático, manufacturado en`;
    }

}