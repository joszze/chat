import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'http';
import { Message } from '@prisma/client';

@WebSocketGateway({ cors: { origin: '*' } })
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createMessage')
  async create(@MessageBody() dto: CreateMessageDto) {
    const message: Message = await this.messagesService.create(dto);

    this.server.emit('messageCreated', message);
  }

  @SubscribeMessage('findAllMessagesInRoom')
  async findAllMessagesInRoom(@MessageBody() roomId: string) {
    return await this.messagesService.findAllMessagesInRoom(roomId);
  }

  @SubscribeMessage('findAllRooms')
  async findAllRooms() {
    return await this.messagesService.findAllRooms();
  }

  @SubscribeMessage('findAllUsers')
  async findAllUsers() {
    return await this.messagesService.findAllUsers();
  }

  @SubscribeMessage('findOneUser')
  findOneUser(@MessageBody() id: string) {
    return this.messagesService.findOneUser(id);
  }
}
