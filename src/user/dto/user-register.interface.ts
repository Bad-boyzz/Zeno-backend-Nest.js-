import { Optional } from '@nestjs/common';
import {
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator';

export class UserRegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @Optional()
    @IsString()
    surname: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsPhoneNumber('RU')
    phone: string;

    constructor(
        name: string,
        surname: string,
        password: string,
        phone: string,
    ) {
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.phone = phone;
    }
}
