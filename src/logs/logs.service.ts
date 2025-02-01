import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './schema/log.schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class LogsService {

  constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

  async findAllLogsByUserId(userId: string) {
    const mongoResult = await this.logModel.find({ user_id: userId }).exec()

    const postgresResult = await prisma.users.findFirst({
      where: {
        user_id: userId,
      }
    })

    return new CreateLogDto(postgresResult, mongoResult)
  }

}
