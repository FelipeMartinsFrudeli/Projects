import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.getOrThrow('JWT_SECRET'),
                signOptions: { expiresIn: '30d' }
            })
        })
    ],
    providers: [AuthenticationService]
})
export class AuthenticationModule {}