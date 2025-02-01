import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { CarsService } from "./services/cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarsInterceptor } from "./interceptors/cars.interceptor";
import { UpdateCarDto } from "./dto/update-car.dto";
import { AuthGuard } from "../auth/guards/auth.guard";
import { CarFactoryService } from "./services/car-factory.service";

@Controller('/cars')
@UseInterceptors(CarsInterceptor)
export class CarsController {

    constructor(private readonly carFactoryService: CarFactoryService, private carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.getCars();
    }

    @Get('/comparison')
    getCarComparison(@Query('idCar1') idCar1: string, @Query('idCar2') idCar2: string) {
        return this.carsService.getCarComparison(idCar1, idCar2)
    }

    @Get('/:id')
    getOneCar(@Param('id') id: string) {
        return this.carsService.getCar(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    async createCar(@Query('region') region: string, @Query('country') country: string, @Body() car: CreateCarDto) {
        this.carFactoryService.setRegion(region, country);
        return this.carFactoryService.createCar(car);
    }

    @Patch('/:id')
    @UseGuards(AuthGuard)
    updateCar(@Param('id') id: string, @Body() car: UpdateCarDto) {
        return this.carsService.updateCar(id, car);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard)
    deleteCar(@Param('id') id: string) {
        return this.carsService.deleteCar(id);
    }

}