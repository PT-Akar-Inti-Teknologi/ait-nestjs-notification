import { SmsAdapter } from '../interfaces/smsadapter.interface';
/**
 * Twilio adapter for sending sms
 */
export declare class FazPassAdapter implements SmsAdapter {
    private apiKey;
    private apiSecret;
    private baseUrl;
    private from;
    constructor(apiKey: string, apiSecret: string, from: string);
    sendSMS(phoneNumber: string, message: string, otpCode?: string): Promise<void>;
}
//# sourceMappingURL=fazpass.adapter.d.ts.map