import { HttpCode } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { SmsAdapter } from '../interfaces/smsadapter.interface';

/**
 * Twilio adapter for sending sms
 */
export class FazPassAdapter implements SmsAdapter {
  private apiKey: string;
  private apiSecret: string;
  private baseUrl: string;
  private from: string;

  constructor(apiKey: string, apiSecret: string, from: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.from = from;
    this.baseUrl = `https://api.fazpass.com`;
  }

  @HttpCode(200)
  async sendSMS(phoneNumber: string, message: string, otpCode?: string) {
    if (!otpCode || otpCode == '') {
      throw new Error(`Fazpass required otpCode parameter!`);
    }
    // set header authentification
    const apiUrl = `${this.baseUrl}/v1/otp/send`;
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    };

    const body = {
      phone: phoneNumber,
      gateway_key: this.apiSecret,
      otp: otpCode,
    };

    try {
      await axios.post(apiUrl, body, config);
    } catch (error) {
      throw error;
    }
  }
}
