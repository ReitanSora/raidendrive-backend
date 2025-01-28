import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { Log } from 'src/logs/log.schema';
import { CustomRequest } from 'src/types/custom-request.interface';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

  use(req: CustomRequest, res: Response, next: () => void) {
    console.log(req.user);
    if (req.user) {

      console.log(req.user);
      const newLog = new this.logModel({
        user_id: req.user.sub,
        user_email: req.user.email,
        user_agent: req.headers["user-agent"],
        module: 'Cars',
        ip_address: req.ip,
        entity: 'cars',
        req_body: req.body,
        url: req.protocol + '://' + req.host + req.originalUrl,
        method: req.method,
        hostname: req.hostname,
      });

      newLog.save();
    }

    next();
  }
}
