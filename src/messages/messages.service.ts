import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Message } from '@prisma/client';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMessageDto): Promise<Message> {
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

  async findAll() {
    return await this.prisma.message.findMany();
  }

  async findOne(id: string) {
    return await `This action returns a #${id} message`;
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return await `This action updates a #${id} message`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} message`;
  }
}
