import { Message } from '../entities/message.entity';
export class CreateMessageDto extends Message{
    room : any // TODO
    date : Date
}
