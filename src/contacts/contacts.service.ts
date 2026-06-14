import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UserStatusEnum } from '../../libs/shared/src';
import { PrismaService } from '../prisma.service';
import type { ContactCreateDto } from './dto/contacts-create.interface';
import type { ContactDeleteDto } from './dto/contacts-delete.interface';

@Injectable()
export class ContactsService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(dto: ContactCreateDto) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    phone: dto.phone,
                },
            });
            if (!user)
                throw new NotFoundException(UserStatusEnum.USER_NOT_FOUND);
            return await this.prismaService.contacts.create({
                data: {
                    user_id: dto.userId,
                    contact_id: user.id,
                },
            });
        } catch (error) {
            throw new BadRequestException(error); // исправить error
        }
    }

    async findMany(userId: string) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id: userId,
                },
            });
            if (!user)
                throw new NotFoundException(UserStatusEnum.USER_NOT_FOUND);
            const contacts = await this.prismaService.contacts.findMany({
                where: {
                    user_id: userId,
                },
            });
            const constactsIds = contacts.map((contact) => contact.contact_id);
            if (constactsIds.length === 0) return [];
            return await this.prismaService.user.findMany({
                where: {
                    id: {
                        in: constactsIds,
                    },
                },
            });
        } catch (error) {
            throw new BadRequestException(error); // исправить error
        }
    }

    async delete(dto: ContactDeleteDto) {
        try {
            const contact = await this.prismaService.contacts.findFirst({
                where: {
                    user_id: dto.userId,
                    contact_id: dto.contactId,
                },
            });
            if (!contact) return;
            return await this.prismaService.contacts.delete({
                where: {
                    id: contact.id,
                },
            });
        } catch (error) {
            throw new BadRequestException(error); // исправить error
        }
    }
}
