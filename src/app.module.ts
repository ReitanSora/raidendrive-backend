import { Module } from '@nestjs/common';
import { CarsModules } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './logs/logs.module';
import { PaymentModule } from './payment/payment.module';

/**
 * Main aplication module
 * Imports and configures the modules Mongoose, Config, Cars, Auth, Logs
 */
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/raidendrive'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CarsModules,
    AuthModule,
    LogsModule,
    PaymentModule,
  ],
})
export class AppModule { }
