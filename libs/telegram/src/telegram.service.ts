import { HttpCode, Inject, Injectable } from '@nestjs/common';
import { TELEGRAM_CONFIG_OPTIONS } from './telegram.constant';
import { TelegramConfig } from './interfaces/telegram-config.interface';
import TelegramBot, { ChatId, Message } from 'node-telegram-bot-api'; // Import ChatId and Message types

@Injectable()
/**
 * Service for sending Telegram notifications.
 * Inherits from the TelegramBot class provided by the node-telegram-bot-api package.
 * @class TelegramService
 */
export class TelegramService extends TelegramBot {
  constructor(
    @Inject(TELEGRAM_CONFIG_OPTIONS) private readonly config: TelegramConfig,
  ) {
    super(config.botToken);
  }

  /**
   * Sends a message to a Telegram channel or chat.
   * @param message {string} The message to be sent. Optionally, include an OTP code within the message.
   * @param channelId {string} (optional) The ID of the channel or chat. If not provided, uses the default channel ID specified in the configuration.
   * @returns Promise<Message> A promise that resolves with the sent message object upon successful sending.
   */
  @HttpCode(200)
  async postToChannel(message: string, channelId?: ChatId): Promise<Message> {
    return this.sendMessage(channelId ?? this.config.channelId, message);
  }
}
