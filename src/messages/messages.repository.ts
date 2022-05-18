import { ClassSerializerInterceptor } from "@nestjs/common";

import { readFile, writeFile } from "fs/promises";




export class MessagesRepository {

    async findAll() {
        const contents = await readFile("messages.json", "utf-8")
        const messages = JSON.parse(contents);
        return messages;
    }


    async findOne(id: number) {
        const contents = await readFile("messages.json", "utf-8")
        const messages = JSON.parse(contents);
        return messages[id]
    }

    async createmessage(Message: string) {
        const contents = await readFile("messages.json", "utf-8")
        const messages = JSON.parse(contents);
        const id =Math.floor(Math.random() * 9999)
        messages[id]={id,Message}
        await writeFile("messages.json", JSON.stringify(messages))
        return true
    }




}