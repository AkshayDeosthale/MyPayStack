import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    if (
      createAuthDto.username === 'akshay' &&
      createAuthDto.password === '12345'
    ) {
      return this.authService.login(createAuthDto);
    } else {
      throw new HttpException(
        'User credentials dont match!',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
