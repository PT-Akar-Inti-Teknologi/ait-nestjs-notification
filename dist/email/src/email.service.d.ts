import { MailerService } from '@nestjs-modules/mailer';
/**
 * Service for sending email
 * @class EmailService
 */
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    /**
     * @param to - { string | list string } the recepient email address
     * @param subject - { string | list string } the subject of the email
     * @param body - { string | html } the body of the email
     * @param cc - { string | list string } [optionalParam] the recepient email cc address
     * @param bcc - { string | list string } [optionalParam] the recepient email bcc address
     * @returns Promise<any>
     * @returns {boolean} status
     * @returns {any} detail - detail response from provider
     * @throws {Error} httpException
     */
    send(to: string, subject: string, body: string, cc: string, bcc: string, attachments: any): Promise<any>;
}
//# sourceMappingURL=email.service.d.ts.map