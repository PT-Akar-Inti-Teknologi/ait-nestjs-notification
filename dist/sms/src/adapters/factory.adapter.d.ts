import { CitcallAdapter } from './citcall.adapter';
import { TwilioAdapter } from './twilio.adapter';
export declare class FactoryAdapter {
    /**
     * Sms Adapter
     * @param {string} - Provider [citcall|twilio], set into environment variable OTP_PROVIDER
     * @param {string} - apiKey, set into environment variable OTP_APIKEY
     * @param {string} - apiSecret, set into environment variable OTP_APISECRET
     * @param {string} - from, set into environment variable OTP_FROM
     */
    static createSmsAdapter(provider: string, apiKey: string, apiSecret: string, from: string): CitcallAdapter | TwilioAdapter;
}
//# sourceMappingURL=factory.adapter.d.ts.map