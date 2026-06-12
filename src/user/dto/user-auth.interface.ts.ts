import { IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class UserAuthDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsString()
    @Length(8)
    phone: string;

    constructor(password: string, phone: string) {
        this.password = password;
        this.phone = phone;
    }
}
