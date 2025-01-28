import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarsController } from "./cars.controller";
import { CarsService } from "./cars.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Log, LogSchema } from "src/logs/log.schema";
import { AuthModule } from "src/auth/auth.module";
//import { LoggerMiddleware } from "./middlewares/cars.middleware";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Log.name,
                schema: LogSchema,
            }
        ]),
        AuthModule
    ],
    controllers: [CarsController],
    providers: [CarsService],
})
export class CarsModules {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(LoggerMiddleware).forRoutes('cars')
    // }
}

