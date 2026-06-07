import { BadRequestException, Injectable } from '@nestjs/common';
import { default as OpenAI } from 'openai';
import { AIInstructions } from '../../libs/shared/src';
import type { TextFormulateDto } from './dto/text-formulate.interface';

@Injectable()
export class YandexService {
    private readonly client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            apiKey: `${process.env.API_KEY}`,
            baseURL: 'https://ai.api.cloud.yandex.net/v1',
            defaultHeaders: {
                'OpenAI-Project': `${process.env.CATALOG_ID}`,
            },
        });
    }

    async decrease(input: string) {
        try {
            console.log(input);
            const response = await this.client.responses.create({
                prompt: {
                    id: `${process.env.TEXT_MODEL_ID}`,
                },
                input,
                instructions: AIInstructions.DECREASE_TEXT,
            });
            return response.output_text;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async expand(input: string) {
        try {
            const response = await this.client.responses.create({
                prompt: {
                    id: `${process.env.TEXT_MODEL_ID}`,
                },
                input,
                instructions: AIInstructions.EXPAND_TEXT,
            });
            return response.output_text;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async formulate(dto: TextFormulateDto) {
        try {
            const response = await this.client.responses.create({
                prompt: {
                    id: `${process.env.TEXT_MODEL_ID}`,
                    variables: {
                        FORMULATE: dto.type,
                    },
                },
                input: `${dto.input} Сделай текст более: ${dto.type}`,
                instructions: AIInstructions.EXPAND_TEXT,
            });
            return response.output_text;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
