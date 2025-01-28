import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Response } from "express";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { catchError, tap } from 'rxjs/operators'
import { Log } from "src/logs/log.schema";
import { CustomRequest } from "src/types/custom-request.interface";

@Injectable()
export class CarsInterceptor implements NestInterceptor {

    constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<CustomRequest>();

        const logEntry = {
            user_id: req.user?.sub,
            user_email: req.user?.email,
            user_agent: req.headers["user-agent"],
            status: null,
            severity: null,
            module: 'Cars',
            ip_address: req.ip,
            entity: 'cars',
            req_body: req.body,
            url: req.protocol + '://' + req.host + req.originalUrl,
            method: req.method,
            hostname: req.hostname,
            res_content: null
        };

        const saveLog = (statusCode: number, resContent: string, severity: string) => {
            const newLog = new this.logModel({
                ...logEntry,
                status: statusCode,
                severity: severity,
                res_content: resContent,
            });

            newLog.save();
        };

        return next
            .handle()
            .pipe(
                tap((data) => {
                    saveLog(res.statusCode, data, res.statusMessage);
                }),
                catchError((error) => {

                    let statusCode: number;
                    let statusMessage: string;

                    if (error instanceof HttpException) {
                        statusCode = error.getStatus();
                        statusMessage = error.getResponse().toString();
                    } else if (error.response?.status) {
                        statusCode = error.response.status;
                        statusMessage = error.response.statusText || error.response.data?.message || 'Unknown error message';
                    } else {
                        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                        statusMessage = 'Internal Server Error';
                    }

                    saveLog(statusCode, error, statusMessage);
                    throw error;
                })
            )
    }
}