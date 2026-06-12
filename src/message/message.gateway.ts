import { Logger } from '@nestjs/common';
import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(4001, {
    cors: true,
})
export class MessageGateway
    implements OnGatewayConnection, OnGatewayDisconnect
{
    private readonly logger = new Logger(MessageGateway.name);

    @WebSocketServer()
    server: Server;

    async handleConnection(client: Socket) {
        this.logger.log(`Client trying to connect... ID: ${client.id}`);
    }

    @SubscribeMessage('sendMessage')
    handleEvent(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ) {
        this.logger.log(client.id, data);
    }

    handleDisconnect(client: any) {}
}
