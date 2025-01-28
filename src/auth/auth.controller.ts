import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get()
    login() {
        return this.authService.login();
    }

    @Get()
    findAll() {
        return 'a';
    }

}
