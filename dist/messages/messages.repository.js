"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const promises_1 = require("fs/promises");
class MessagesRepository {
    async findAll() {
        const contents = await (0, promises_1.readFile)("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        return messages;
    }
    async findOne(id) {
        const contents = await (0, promises_1.readFile)("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async createmessage(Message) {
        const contents = await (0, promises_1.readFile)("messages.json", "utf-8");
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 9999);
        messages[id] = { id, Message };
        await (0, promises_1.writeFile)("messages.json", JSON.stringify(messages));
        return true;
    }
}
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map