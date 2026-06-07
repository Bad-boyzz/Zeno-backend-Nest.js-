import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AITextFormulations } from '../../../libs/shared/src';

export class TextFormulateDto {
    @IsNotEmpty()
    @IsString()
    input: string;

    @IsNotEmpty()
    @IsEnum(AITextFormulations)
    type: AITextFormulations;

    constructor(input: string, type: AITextFormulations) {
        this.input = input;
        this.type = type;
    }
}
