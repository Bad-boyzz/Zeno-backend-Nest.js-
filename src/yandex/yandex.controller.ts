import { Body, Controller, Post } from '@nestjs/common';
import { TextDecreaseDto } from './dto/text-decrease.interface';
import { TextExpandDto } from './dto/text-expand.interface';
import { TextFormulateDto } from './dto/text-formulate.interface';
import { YandexService } from './yandex.service';

@Controller('yandex')
export class YandexController {
    constructor(private readonly yandexService: YandexService) {}

    @Post('/text/decrease')
    async decrease(@Body() dto: TextDecreaseDto) {
        return await this.yandexService.decrease(dto.input);
    }

    @Post('/text/expand')
    async expand(@Body() dto: TextExpandDto) {
        return await this.yandexService.expand(dto.input);
    }

    @Post('/text/formulate')
    async formulate(@Body() dto: TextFormulateDto) {
        return await this.yandexService.formulate(dto);
    }
}
