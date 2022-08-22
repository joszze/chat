import { Message } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  id: string;
  @IsString()
  text: string;
  @IsString()
  userid: string;
  @IsString()
  roomid: string;
}
