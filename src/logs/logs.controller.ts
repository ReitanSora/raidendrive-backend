import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';

@Controller('/logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) { }

  @Get()
  findAll(@Query('userId') userId: string) {
    return this.logsService.findAllLogsByUserId(userId);
  }

}
