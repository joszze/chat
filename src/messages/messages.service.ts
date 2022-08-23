import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Message } from '@prisma/client';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMessageDto) {
    const message: Message = await this.prisma.message.create({
      data: {
        id: dto.id,
        text: dto.text,
        userId: dto.userid,
        roomId: dto.roomid,
      },
    });
    return message;
  }

  async findAllMessagesInRoom(roomId: string) {
    return await this.prisma.room
      .findUnique({ where: { id: roomId } })
      .messages();
  }

  async findAllRooms() {
    return await this.prisma.room.findMany();
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findOneUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
