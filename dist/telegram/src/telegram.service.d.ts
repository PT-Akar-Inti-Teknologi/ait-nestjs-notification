import { TelegramConfig } from './interfaces/telegram-config.interface';
import TelegramBot, { ChatId, Message } from 'node-telegram-bot-api';
export declare class TelegramService extends TelegramBot {
    private readonly config;
    constructor(config: TelegramConfig);
    /**
     * Sends a message to a Telegram channel or chat.
     * @param message {string} The message to be sent. Optionally, include an OTP code within the message.
     * @param channelId {string} (optional) The ID of the channel or chat. If not provided, uses the default channel ID specified in the configuration.
     * @returns Promise<Message> A promise that resolves with the sent message object upon successful sending.
     */
    postToChannel(message: string, channelId?: ChatId): Promise<Message>;
}
//# sourceMappingURL=telegram.service.d.ts.map