"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitcallAdapter = void 0;
const axios_1 = __importDefault(require("axios"));
class CitcallAdapter {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = `https://api.citcall.com/v2/smsotp`;
    }
    async sendSMS(phoneNumber, message) {
        // set header authentication
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${this.apiKey}`,
            },
        };
        // set parameter data
        const data = `msisdn=${phoneNumber}&content=${message}`;
        try {
            const response = await axios_1.default.post(this.baseUrl, data, config);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.CitcallAdapter = CitcallAdapter;
//# sourceMappingURL=citcall.adapter.js.map