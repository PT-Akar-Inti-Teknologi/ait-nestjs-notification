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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const telegram_constant_1 = require("./telegram.constant");
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api")); // Import ChatId and Message types
let TelegramService = class TelegramService extends node_telegram_bot_api_1.default {
    constructor(config) {
        super(config.botToken);
        this.config = config;
    }
    /**
     * Sends a message to a Telegram channel or chat.
     * @param message {string} The message to be sent. Optionally, include an OTP code within the message.
     * @param channelId {string} (optional) The ID of the channel or chat. If not provided, uses the default channel ID specified in the configuration.
     * @returns Promise<Message> A promise that resolves with the sent message object upon successful sending.
     */
    async postToChannel(message, channelId) {
        return this.sendMessage(channelId !== null && channelId !== void 0 ? channelId : this.config.channelId, message);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TelegramService.prototype, "postToChannel", null);
TelegramService = __decorate([
    (0, common_1.Injectable)()
    /**
     * Service for sending Telegram notifications.
     * Inherits from the TelegramBot class provided by the node-telegram-bot-api package.
     * @class TelegramService
     */
    ,
    __param(0, (0, common_1.Inject)(telegram_constant_1.TELEGRAM_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], TelegramService);
exports.TelegramService = TelegramService;
//# sourceMappingURL=telegram.service.js.map