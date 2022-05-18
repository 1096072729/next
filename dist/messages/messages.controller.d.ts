import { MessagesService } from './messages.service';
import { CreateMessageDto } from './messages.dto';
export declare class MessagesController {
    private messagesservice;
    constructor(messagesservice: MessagesService);
    GetListMessages(): Promise<any>;
    createmessage(body: CreateMessageDto): Promise<any>;
    Getmessages(id: number): Promise<any>;
}
