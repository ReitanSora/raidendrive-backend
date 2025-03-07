import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from 'src/logs/schema/log.schema';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Log.name,
        schema: LogSchema,
      }
    ]),
    JwtModule.register({
      secret: process.env.SECRET_KEY
    })
  ],
  providers: [AuthService, AuthGuard],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
