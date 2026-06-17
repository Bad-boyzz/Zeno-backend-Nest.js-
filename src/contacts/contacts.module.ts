import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserModule } from '../user/user.module';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
    imports: [UserModule],
    providers: [ContactsService, PrismaService],
    controllers: [ContactsController],
})
export class ContactsModule {}
