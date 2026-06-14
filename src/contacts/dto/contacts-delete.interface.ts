import { IsNotEmpty, IsString } from 'class-validator';

export class ContactDeleteDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    contactId: string;

    constructor(userId: string, contactId: string) {
        this.userId = userId;
        this.contactId = contactId;
    }
}
