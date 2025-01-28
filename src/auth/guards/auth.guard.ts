import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from 'src/logs/log.schema';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService, @InjectModel(Log.name) private logModel: Model<Log>) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    const logEntry = {
      user_id: request.user?.sub,
      user_email: request.user?.email,
      user_agent: request.headers["user-agent"],
      status: null,
      severity: null,
      module: 'Cars',
      ip_address: request.ip,
      entity: 'cars',
      req_body: request.body,
      url: request.protocol + '://' + request.host + request.originalUrl,
      method: request.method,
      hostname: request.hostname,
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

    if (!authHeader) {
      saveLog(403, 'Authorization header missing', 'Error');
      return false;
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      saveLog(403, 'Invalid authorizaztion header', 'Error');
      return false;
    };

    try {
      const user = this.authService.validateToken(token);
      request.user = user;

      return true;
    } catch (error) {
      saveLog(403, 'Invalid token', 'Unauthorized');
      return false;
    }
  }
}
