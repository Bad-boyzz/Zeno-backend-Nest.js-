import {
    Module,
    type MiddlewareConsumer,
    type NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '../libs/shared/src';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { YandexModule } from './yandex/yandex.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, YandexModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
