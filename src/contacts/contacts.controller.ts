import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import type { ContactCreateDto } from './dto/contacts-create.interface';
import type { ContactDeleteDto } from './dto/contacts-delete.interface';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Post(':userId')
    async create(
        @Param('userId') userId: string,
        @Body() dto: ContactCreateDto,
    ) {
        return await this.contactsService.create(userId, dto);
    }

    @Get(':userId')
    async findMany(@Param('userId') userId: string) {
        return await this.contactsService.findMany(userId);
    }

    @Delete(':userId')
    async delete(
        @Param('userId') userId: string,
        @Body() dto: ContactDeleteDto,
    ) {
        return await this.contactsService.delete(userId, dto);
    }
}
