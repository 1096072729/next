import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    private messagesmepository;
    constructor(messagesmepository: MessagesRepository);
    findOne(id: number): any;
    findAll(): any;
    createmessage(Message: string): any;
}
