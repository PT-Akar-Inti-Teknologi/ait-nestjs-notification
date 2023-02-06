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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const factory_adapter_1 = require("./adapters/factory.adapter");
let SmsService = class SmsService {
    constructor(config) {
        this.adapter = factory_adapter_1.FactoryAdapter.createSmsAdapter(config.provider, config.apiKey, config.apiSecret, config.from);
    }
    /**
     *
     * @param phoneNumber {string} - Phone number destination message
     * @param message {string} - string message. We can add otpcode to send otp message in message parameter
     * @returns Promise <any>
     */
    async sendSMS(phoneNumber, message) {
        return this.adapter.sendSMS(phoneNumber, message);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SmsService.prototype, "sendSMS", null);
SmsService = __decorate([
    (0, common_1.Injectable)()
    /**
     * Service for sending sms
     * @class SmsService
     */
    ,
    __param(0, (0, common_1.Inject)('SMS_CONFIG_OPTIONS')),
    __metadata("design:paramtypes", [Object])
], SmsService);
exports.SmsService = SmsService;
//# sourceMappingURL=sms.service.js.map