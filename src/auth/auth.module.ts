import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from 'src/logs/log.schema';
//import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Log.name,
        schema: LogSchema,
      }
    ]),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '60m' }
    })
  ],
  providers: [AuthService, AuthGuard],
  exports: [AuthService]
})
export class AuthModule { }
