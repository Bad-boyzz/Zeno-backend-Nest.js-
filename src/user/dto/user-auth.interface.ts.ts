import {
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class UserAuthDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsPhoneNumber('RU')
    phone: string;

    constructor(password: string, phone: string) {
        this.password = password;
        this.phone = phone;
    }
}
