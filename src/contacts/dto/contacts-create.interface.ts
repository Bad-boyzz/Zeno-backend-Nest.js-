import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ContactCreateDto {
    @IsNotEmpty()
    @IsString()
    @Length(8)
    phone: string;

    constructor(phone: string) {
        this.phone = phone;
    }
}
