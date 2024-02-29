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
exports.FazPassAdapter = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
/**
 * Twilio adapter for sending sms
 */
class FazPassAdapter {
    constructor(apiKey, apiSecret, from) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.from = from;
        this.baseUrl = `https://api.fazpass.com`;
    }
    async sendSMS(phoneNumber, message, otpCode) {
        if (!otpCode || otpCode == '') {
            throw new Error(`Fazpass required otpCode parameter!`);
        }
        // set header authentification
        const apiUrl = `${this.baseUrl}/v1/otp/send`;
        const config = {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
        };
        const body = {
            phone: phoneNumber,
            gateway_key: this.apiSecret,
            otp: otpCode,
        };
        try {
            await axios_1.default.post(apiUrl, body, config);
        }
        catch (error) {
            throw error;
        }
    }
}
__decorate([
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], FazPassAdapter.prototype, "sendSMS", null);
exports.FazPassAdapter = FazPassAdapter;
//# sourceMappingURL=fazpass.adapter.js.map