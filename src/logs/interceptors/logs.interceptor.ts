import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { catchError, Observable, tap } from 'rxjs';
import { Log } from '../schema/log.schema';
import { CustomRequest } from 'src/types/custom-request.interface';
import { Response } from 'express';

@Injectable()
export class LogsInterceptor implements NestInterceptor {
  constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<CustomRequest>();

    const logEntry = {
      user_id: request.user?.sub,
      user_agent: request.headers['user-agent'],
      status: null,
      severity: null,
      module: 'Logs',
      ip_address: request.ip,
      entity: 'logs',
      req_body: request.body,
      url: request.protocol + '://' + request.host + request.originalUrl,
      method: request.method,
      hostname: request.hostname,
      res_content: null,
    };

    const saveLog = async (
      statusCode: number,
      resContent: string | object,
      severity: string,
    ) => {
      const newLog = new this.logModel({
        ...logEntry,
        status: statusCode,
        severity: severity,
        res_content:
          typeof resContent === 'string'
            ? resContent
            : JSON.stringify(resContent),
      });

      await newLog.save();
    };

    return next.handle().pipe(
      tap(() => {
        saveLog(response.statusCode, 'Log created successfully', response.statusMessage);
      }),
      catchError((error) => {
        let statusCode: number;
        let statusMessage: string;

        if (error instanceof HttpException) {
          statusCode = error.getStatus();
          statusMessage = error.getResponse().toString();
        } else if (error.response?.status) {
          statusCode = error.response.status;
          statusMessage =
            error.response.statusText ||
            error.response.data?.message ||
            'Unknown error message';
        } else {
          statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
          statusMessage = 'Internal Server Error';
        }

        saveLog(statusCode, error, statusMessage);
        throw error;
      }),
    );
  }
}
