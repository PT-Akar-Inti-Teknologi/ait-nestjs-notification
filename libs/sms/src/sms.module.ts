import { Module, DynamicModule } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsEnvConfig } from './interfaces';

@Module({})
export class SmsModule {
  static register(options: SmsEnvConfig): DynamicModule {
    return {
      module: SmsModule,
      providers: [
        {
          provide: 'SMS_CONFIG_OPTIONS',
          useValue: options,
        },
        SmsService,
      ],
      exports: [SmsService],
    };
  }
}
