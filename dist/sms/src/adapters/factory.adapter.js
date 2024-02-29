"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryAdapter = void 0;
const citcall_adapter_1 = require("./citcall.adapter");
const twilio_adapter_1 = require("./twilio.adapter");
const fazpass_adapter_1 = require("./fazpass.adapter");
const provider_enum_1 = require("../enum/provider.enum");
class FactoryAdapter {
    /**
     * Sms Adapter
     * @param {string} - Provider [citcall|twilio], set into environment variable OTP_PROVIDER
     * @param {string} - apiKey, set into environment variable OTP_APIKEY
     * @param {string} - apiSecret, set into environment variable OTP_APISECRET
     * @param {string} - from, set into environment variable OTP_FROM
     */
    static createSmsAdapter(provider, apiKey, apiSecret, from) {
        switch (provider) {
            case provider_enum_1.Provider.CITCALL:
                return new citcall_adapter_1.CitcallAdapter(apiKey);
            case provider_enum_1.Provider.TWILIO:
                return new twilio_adapter_1.TwilioAdapter(apiKey, apiSecret, from);
            case provider_enum_1.Provider.FAZPASS:
                return new fazpass_adapter_1.FazPassAdapter(apiKey, apiSecret, from);
            default:
                throw new Error('Invalid SMS provider, Please set environment variable OTP_PROVIDER');
        }
    }
}
exports.FactoryAdapter = FactoryAdapter;
//# sourceMappingURL=factory.adapter.js.map