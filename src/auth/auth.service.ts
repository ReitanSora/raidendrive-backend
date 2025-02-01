import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  private readonly jwtSecret = process.env.SECRET_KEY;

  validateToken(token: string) {
    try {
      console.log(token);
      console.log(this.jwtSecret);
      const decoded = this.jwtService.verify(token, {
        secret: this.jwtSecret,
      });

      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Invalid Token')
    }
  }
}
