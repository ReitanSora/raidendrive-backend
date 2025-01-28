import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  private readonly jwtSecret = process.env.SECRET_KEY;

  validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: this.jwtSecret,
      });

      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Invalid Token')
    }
  }

  async login() {
    try {
      const response = await fetch('http://localhost:8080/user/find', {
        method: 'GET',
      }
      )
      const data = await response.json();
      console.log(data);
      return response.json();
    } catch (error) {
      console.log(error)
      return error;
    }


  }
}
