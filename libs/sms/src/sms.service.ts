import { HttpCode, Inject, Injectable } from '@nestjs/common';
import { FactoryAdapter } from './adapters/factory.adapter';
import { SmsAdapter, SmsEnvConfig } from './interfaces';

@Injectable()
/**
 * Service for sending sms
 * @class SmsService
 */
export class SmsService {

  /** sms adapter to use for sending sms */
  private adapter: SmsAdapter;

  constructor(@Inject('SMS_CONFIG_OPTIONS') config: SmsEnvConfig) {
    this.adapter = FactoryAdapter.createSmsAdapter(
      config.provider,
      config.apiKey,
      config.apiSecret,
      config.from,
    );
  }

  /**
   * 
   * @param phoneNumber {string} - Phone number destination message
   * @param message {string} - string message. We can add otpcode to send otp message in message parameter
   * @returns Promise <any>
   */
  @HttpCode(200)
  async sendSMS(phoneNumber: string, message: string): Promise<any> {
    return this.adapter.sendSMS(phoneNumber, message);
  }
}
