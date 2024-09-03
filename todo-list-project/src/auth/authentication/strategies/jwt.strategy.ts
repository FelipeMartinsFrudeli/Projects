import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

interface RequestWithToken extends Request {
    cookies: { access_token?: string; }
}

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: RequestWithToken) => req ? req.cookies.access_token : null
            ]),
            secretOrKey: config.getOrThrow('JWT_SECRET')
        })
    }
}