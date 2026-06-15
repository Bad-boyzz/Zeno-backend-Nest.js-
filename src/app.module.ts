import {
    Module,
    type MiddlewareConsumer,
    type NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '../libs/shared/src';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { YandexModule } from './yandex/yandex.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        UserModule,
        YandexModule,
        // MessageModule,
        ContactsModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
