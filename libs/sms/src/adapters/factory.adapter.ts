import { CitcallAdapter } from './citcall.adapter';
import { TwilioAdapter } from './twilio.adapter';
import { FazPassAdapter } from './fazpass.adapter';
import { Provider } from '../enum/provider.enum';

export class FactoryAdapter {
  /**
   * Sms Adapter
   * @param {string} - Provider [citcall|twilio], set into environment variable OTP_PROVIDER
   * @param {string} - apiKey, set into environment variable OTP_APIKEY
   * @param {string} - apiSecret, set into environment variable OTP_APISECRET
   * @param {string} - from, set into environment variable OTP_FROM
   */
  public static createSmsAdapter(
    provider: string,
    apiKey: string,
    apiSecret: string,
    from: string,
  ) {
    switch (provider) {
      case Provider.CITCALL:
        return new CitcallAdapter(apiKey);
      case Provider.TWILIO:
        return new TwilioAdapter(apiKey, apiSecret, from);
      case Provider.FAZPASS:
        return new FazPassAdapter(apiKey, apiSecret, from);
      default:
        throw new Error(
          'Invalid SMS provider, Please set environment variable OTP_PROVIDER',
        );
    }
  }
}
