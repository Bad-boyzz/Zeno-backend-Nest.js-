import { Module } from '@nestjs/common';
import { Server } from 'socket.io';
import { MessageGateway } from './message.gateway';
import { MessageService } from './message.service';

@Module({
    providers: [MessageService, MessageGateway, Server],
})
export class MessageModule {}
