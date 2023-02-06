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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioAdapter = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
/**
 * Twilio adapter for sending sms
 */
class TwilioAdapter {
    constructor(apiKey, apiSecret, from) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.from = from;
        this.baseUrl = `https://api.twilio.com/2010-04-01/Accounts/${this.apiKey}/Messages.json`;
    }
    async sendSMS(phoneNumber, message) {
        // set header authentification
        const config = {
            auth: {
                username: this.apiKey,
                password: this.apiSecret,
            },
        };
        // body parameter
        const data = new URLSearchParams({
            To: phoneNumber,
            Body: message,
            From: this.from,
        });
        try {
            await axios_1.default.post(this.baseUrl, data, config);
            return { status: true };
        }
        catch (error) {
            throw error;
        }
    }
}
__decorate([
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TwilioAdapter.prototype, "sendSMS", null);
exports.TwilioAdapter = TwilioAdapter;
//# sourceMappingURL=twilio.adapter.js.map