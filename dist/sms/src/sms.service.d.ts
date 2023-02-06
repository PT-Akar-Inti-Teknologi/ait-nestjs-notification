import { SmsEnvConfig } from './interfaces';
export declare class SmsService {
    /** sms adapter to use for sending sms */
    private adapter;
    constructor(config: SmsEnvConfig);
    /**
     *
     * @param phoneNumber {string} - Phone number destination message
     * @param message {string} - string message. We can add otpcode to send otp message in message parameter
     * @returns Promise <any>
     */
    sendSMS(phoneNumber: string, message: string): Promise<any>;
}
//# sourceMappingURL=sms.service.d.ts.map