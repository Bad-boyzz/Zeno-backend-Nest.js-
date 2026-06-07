import { IsNotEmpty, IsString } from 'class-validator';

export class TextDecreaseDto {
    @IsNotEmpty()
    @IsString()
    input: string;

    constructor(input: string) {
        this.input = input;
    }
}
