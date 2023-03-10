"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SmsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsModule = void 0;
const common_1 = require("@nestjs/common");
const sms_service_1 = require("./sms.service");
let SmsModule = SmsModule_1 = class SmsModule {
    static register(options) {
        return {
            module: SmsModule_1,
            providers: [
                {
                    provide: 'SMS_CONFIG_OPTIONS',
                    useValue: options,
                },
                sms_service_1.SmsService,
            ],
            exports: [sms_service_1.SmsService],
        };
    }
};
SmsModule = SmsModule_1 = __decorate([
    (0, common_1.Module)({})
], SmsModule);
exports.SmsModule = SmsModule;
//# sourceMappingURL=sms.module.js.map