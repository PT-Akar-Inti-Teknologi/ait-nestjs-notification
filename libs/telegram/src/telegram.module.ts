import { Module, DynamicModule } from '@nestjs/common';
import { TelegramConfig } from './interfaces/telegram-config.interface';
import { TELEGRAM_CONFIG_OPTIONS } from './telegram.constant';
import { TelegramService } from './telegram.service';

@Module({})
export class TelegramModule {
  static register(options: TelegramConfig): DynamicModule {
    return {
      module: TelegramModule,
      providers: [
        {
          provide: TELEGRAM_CONFIG_OPTIONS,
          useValue: options,
        },
        TelegramService,
      ],
      exports: [TelegramService],
    };
  }
}
