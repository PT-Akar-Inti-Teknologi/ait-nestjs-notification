import { SmsAdapter } from '../interfaces';
export declare class CitcallAdapter implements SmsAdapter {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    sendSMS(phoneNumber: string, message: string): Promise<any>;
}
//# sourceMappingURL=citcall.adapter.d.ts.map