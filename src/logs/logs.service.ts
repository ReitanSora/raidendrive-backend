import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './schema/log.schema';
import { PrismaClient } from '@prisma/client';

/**
 * Attribute allowing creation of a prisma client
 */
const prisma = new PrismaClient();

/**
 * Log management service
 * Contains logic for creating and reading logs
 */
@Injectable()
export class LogsService {

  /**
   * Constructor of LogsService class, create an instance of Model
   * @param logModel - Mongoose schema for logs collection
   * @param authService - AuthService instance
   * @description The log model is used to interact with MongoDB
   */
  constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

  /**
   * Gets all logs of a user, based on his id
   * @param userId - User ID of user to search for
   * @returns Object of CreateLogDto class
   */
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
