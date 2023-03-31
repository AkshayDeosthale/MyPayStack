"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async verifyToken(token) {
        try {
            const payload = this.jwtService.verify(token);
            return payload;
        }
        catch (err) {
            throw new Error('Invalid token');
        }
    }
    async login(user) {
        const accessTokenPayload = { username: user.username, sub: user.password };
        const accessToken = this.jwtService.sign(accessTokenPayload);
        const refreshTokenPayload = {
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
    async refresh(refreshToken) {
        try {
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);
            const accessTokenPayload = {
                username: decoded.username,
                password: decoded.password,
            };
            const accessToken = this.jwtService.sign(accessTokenPayload);
            return {
                access_token: accessToken,
            };
        }
        catch (err) {
            throw new common_1.HttpException('Invalid refresh token', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map