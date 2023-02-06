"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
/**
 * Service for sending email
 * @class EmailService
 */
let EmailService = class EmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
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
    async send(to, subject, body, cc, bcc, attachments) {
        if (!to)
            throw new Error('Email to is required');
        if (!subject)
            throw new Error('email subject is required');
        if (!body)
            throw new Error('email body is required');
        const params = {
            to,
            cc,
            bcc,
            subject,
            html: body,
            attachments,
        };
        try {
            await this.mailerService.sendMail(params);
            return { status: true };
        }
        catch (error) {
            console.log('error: ', error);
            throw new common_1.HttpException({
                status: false,
                error_code: 99,
                message: error
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map