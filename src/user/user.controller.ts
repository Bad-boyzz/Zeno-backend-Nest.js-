import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import { UserAuthDto } from './dto/user-auth.interface.ts';
import { UserRegisterDto } from './dto/user-register.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() dto: UserRegisterDto) {
        return await this.userService.register(dto);
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.userService.findById(id);
    }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    async findMany() {
        return await this.userService.findMany();
    }

    @Post('/auth')
    @HttpCode(HttpStatus.OK)
    async auth(@Body() dto: UserAuthDto) {
        return await this.userService.auth(dto);
    }
}
