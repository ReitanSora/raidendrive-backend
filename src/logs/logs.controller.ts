import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { LogsService } from './logs.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { LogsInterceptor } from './interceptors/logs.interceptor';

@Controller('/logs')
@UseInterceptors(LogsInterceptor)
export class LogsController {
  constructor(private readonly logsService: LogsService) { }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('userId') userId: string) {
    return this.logsService.findAllLogsByUserId(userId);
  }

}
