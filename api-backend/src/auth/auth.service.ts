import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { CreateAuthDto } from './dto/create-auth.dto';

export interface RefreshToken {
  username: string;
  password: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {}

  async verifyToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (err) {
      throw new Error('Invalid token');
    }
  }

  async login(user: CreateAuthDto) {
    const accessTokenPayload = { username: user.username, sub: user.password };
    const accessToken = this.jwtService.sign(accessTokenPayload);

    const refreshTokenPayload: RefreshToken = {
      password: user.password,
      username: user.username,
    };
    const refreshToken = this.jwtService.sign(refreshTokenPayload, {
      expiresIn: '1h',
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refresh(refreshToken: string) {
    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_TOKEN_SECRET,
      ) as RefreshToken;
      const accessTokenPayload = {
        username: decoded.username,
        password: decoded.password,
      };
      const accessToken = this.jwtService.sign(accessTokenPayload);
      return {
        access_token: accessToken,
      };
    } catch (err) {
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
  }
}
