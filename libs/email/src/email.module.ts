import { MailerModule } from '@nestjs-modules/mailer';
import { DynamicModule, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailEnvConfig } from './interfaces';

@Module({})
export class EmailModule {
  static register(options: EmailEnvConfig): DynamicModule {
    return {
      module: EmailModule,
      imports: [
        MailerModule.forRoot(options),
      ],
      providers: [EmailService],
      exports: [EmailService],
    };
  }
}
