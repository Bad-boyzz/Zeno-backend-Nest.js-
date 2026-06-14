import { IsNotEmpty, IsString } from 'class-validator';

export class ContactsFindManyDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }
}
