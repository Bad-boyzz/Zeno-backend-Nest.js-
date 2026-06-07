import { IsNotEmpty, IsString } from 'class-validator';

export class TextExpandDto {
    @IsNotEmpty()
    @IsString()
    input: string;

    constructor(input: string) {
        this.input = input;
    }
}
