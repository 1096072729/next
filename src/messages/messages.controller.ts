import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './messages.dto';


@Controller('messages')
export class MessagesController {
    private messagesservice
    constructor(messagesservice: MessagesService) {
        this.messagesservice = messagesservice;
    }


    @Get()
    async GetListMessages() {
        let message = await this.messagesservice.findAll
        return message;
    }

    @Post()
    // @UsePipes(new ValidationPipe({transform: true}))
    async createmessage(@Body() body: CreateMessageDto) {
        let state = await this.messagesservice.createmessage(body.message)
        return state
    }

    @Get('/:id')
    async Getmessages(@Param() id: number) {
        let message = await this.messagesservice.findone(id)
        return message
    }


}
