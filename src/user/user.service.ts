import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { UserStatusEnum } from '../../libs/shared/src';
import { PrismaService } from '../prisma.service';
import type { UserAuthDto } from './dto/user-auth.interface.ts';
import type { UserRegisterDto } from './dto/user-register.interface';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async register(dto: UserRegisterDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                phone: dto.phone,
            },
        });
        if (user)
            throw new ConflictException(UserStatusEnum.PHONE_NUMBER_EXISTS);
        try {
            return await this.prismaService.user.create({
                data: {
                    name: dto.name,
                    surname: dto.surname,
                    password: dto.password,
                    phone: dto.phone,
                },
            });
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async auth(dto: UserAuthDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                phone: dto.phone,
            },
        });
        if (!user) throw new NotFoundException(UserStatusEnum.USER_NOT_FOUND);
        if (user.password !== dto.password)
            throw new UnauthorizedException(UserStatusEnum.UNAUTHORIZED);
        return user;
    }

    async findMany() {
        try {
            return await this.prismaService.user.findMany();
        } catch (error) {
            throw new BadRequestException(error); // исправить error
        }
    }
}
