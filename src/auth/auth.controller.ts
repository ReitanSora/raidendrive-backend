import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@Controller('/auth')
@UseInterceptors(AuthInterceptor)
export class AuthController {

    @Get('/login')
    @UseGuards(AuthGuard)
    login (){
        return JSON.stringify({message: 'User login log created successfully'});
    }

    @Get('/logout')
    @UseGuards(AuthGuard)
    logout (){
        return JSON.stringify({message: 'User logout log created successfully'});
    }
}
