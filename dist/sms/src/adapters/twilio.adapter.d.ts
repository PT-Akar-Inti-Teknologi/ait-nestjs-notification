import { SmsAdapter } from '../interfaces';
/**
 * Twilio adapter for sending sms
 */
export declare class TwilioAdapter implements SmsAdapter {
    private apiKey;
    private apiSecret;
    private baseUrl;
    private from;
    constructor(apiKey: string, apiSecret: string, from: string);
    sendSMS(phoneNumber: string, message: string): Promise<{
        status: boolean;
    }>;
}
//# sourceMappingURL=twilio.adapter.d.ts.map