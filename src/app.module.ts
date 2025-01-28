import { Module } from '@nestjs/common';
import { CarsModules } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from './auth/guards/auth.guard';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/raidendrive'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CarsModules, 
    AuthModule, 
    UsersModule
  ],
})
export class AppModule { }
