export declare class MessagesRepository {
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    createmessage(Message: string): Promise<boolean>;
}
