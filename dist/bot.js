"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
require('dotenv').config();
class Bot extends discord_js_1.Client {
    constructor(options) {
        super(options);
        this.blackbelts = new discord_js_1.Collection;
        this.commands = new discord_js_1.Collection;
        this.aliases = new discord_js_1.Collection;
        this.commandCache = new discord_js_1.Collection;
    }
    ;
}
exports.Bot = Bot;
const bot = new Bot;
const handlers = ['command', 'event'];
handlers.forEach(handler => require(`./handler/${handler}`)(bot));
bot.login(process.env.BOT_TOKEN);
//# sourceMappingURL=bot.js.map