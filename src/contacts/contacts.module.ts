import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
    providers: [ContactsService, PrismaService],
    controllers: [ContactsController],
})
export class ContactsModule {}
