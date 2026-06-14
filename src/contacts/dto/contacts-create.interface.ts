import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ContactCreateDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    @Length(8)
    phone: string;

    constructor(userId: string, phone: string) {
        this.userId = userId;
        this.phone = phone;
    }
}
