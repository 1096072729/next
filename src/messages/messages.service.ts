import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    private messagesmepository
    constructor(messagesmepository: MessagesRepository) {
this.messagesmepository = messagesmepository
    }
    findOne(id: number) {
        return this.messagesmepository.findOne(id);
    }
    findAll() {
        return this.messagesmepository.findAll;
    }
    createmessage(Message: string) {
        return this.messagesmepository.createmessage(Message);

    }


}
