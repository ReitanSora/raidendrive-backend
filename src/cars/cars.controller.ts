import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarsInterceptor } from "./interceptors/cars.interceptor";
import { UpdateCarDto } from "./dto/update-car.dto";
import { AuthGuard } from "../auth/guards/auth.guard";

@Controller('/cars')
@UseInterceptors(CarsInterceptor)
export class CarsController {

    constructor(private carsService: CarsService){}

    @Get()
    getAllCars() {
        return this.carsService.getCars();
    }

    @Get('/comparison')
    getCarComparison(@Query('idCar1') idCar1: string, @Query('idCar2') idCar2: string){
        return this.carsService.getCarComparison(idCar1, idCar2)
    }

    @Get('/:id')
    getOneCar(@Param('id') id: string) {
        return this.carsService.getCar(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    createCar(@Body() car: CreateCarDto){
        return this.carsService.createCar(car);
    }

    @Patch('/:id')
    @UseGuards(AuthGuard)
    updateCar(@Param('id') id: string, @Body() car: UpdateCarDto){
        return this.carsService.updateCar(id, car);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard)
    deleteCar(@Param('id') id: string){
        return this.carsService.deleteCar(id);
    }

}