import axios from 'axios';
import { SmsAdapter } from '../interfaces';

export class CitcallAdapter implements SmsAdapter {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = `https://api.citcall.com/v2/smsotp`;
  }

  async sendSMS(phoneNumber: string, message: string) {
    // set header authentication
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${this.apiKey}`,
      },
    };
    // set parameter data
    const data = `msisdn=${phoneNumber}&content=${message}`;

    try {
      const response = await axios.post(this.baseUrl, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
