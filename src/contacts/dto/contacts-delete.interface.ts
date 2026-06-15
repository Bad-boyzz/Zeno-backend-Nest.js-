import { IsNotEmpty, IsString } from 'class-validator';

export class ContactDeleteDto {
    @IsNotEmpty()
    @IsString()
    contactId: string;

    constructor(contactId: string) {
        this.contactId = contactId;
    }
}
