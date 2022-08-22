import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  @IsString()
  id: string;
  @IsString()
  text: string;
}
