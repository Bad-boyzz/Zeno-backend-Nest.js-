import { Module } from '@nestjs/common';
import { YandexService } from './yandex.service';
import { YandexController } from './yandex.controller';

@Module({
  controllers: [YandexController],
  providers: [YandexService],
})
export class YandexModule {}
