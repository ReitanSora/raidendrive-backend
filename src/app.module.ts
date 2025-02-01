import { Module } from '@nestjs/common';
import { CarsModules } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/raidendrive'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CarsModules, 
    AuthModule, LogsModule,
  ],
})
export class AppModule { }
