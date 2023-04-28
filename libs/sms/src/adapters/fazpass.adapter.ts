/* eslint-disable prettier/prettier */
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
  private notificationsEnabled = true;

  constructor(apiKey: string, apiSecret: string, from: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.from = from;
    this.baseUrl = `https://api.fazpass.com`;
  }

  enableNotifications() {
    this.notificationsEnabled = true;
  }

  disableNotifications() {
    this.notificationsEnabled = false;
  }

  @HttpCode(200)
  async changeToDisableNotification() {
    this.disableNotifications();
    return { message: 'Notifications disabled' };
  }

  @HttpCode(200)
  async changeToEnableNotification() {
    this.enableNotifications();
    return { message: 'Notifications enabled' };
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
      if (this.notificationsEnabled) {
        await axios.post(apiUrl, body, config);
        return { message: 'SMS sent successfully' };
      } else {
        return { message: 'Notifications disabled' };
      }
    } catch (error) {
      throw error;
    }
  }
}
