import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
export interface RefreshToken {
    username: string;
    password: string;
    iat?: number;
    exp?: number;
}
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    verifyToken(token: string): Promise<any>;
    login(user: CreateAuthDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(refreshToken: string): Promise<{
        access_token: string;
    }>;
}
