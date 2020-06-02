"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    name: 'message',
    run: (bot, msg) => __awaiter(void 0, void 0, void 0, function* () {
        const commandChannel = '714659786691444818';
        const blackbelt = bot.blackbelts.get(msg.author.id);
        if (blackbelt)
            msg.react('702013001435447297');
        const prefix = 'c!';
        if (msg.channel.id !== commandChannel)
            return;
        if (msg.author.bot)
            return;
        if (!msg.guild)
            return;
        if (!msg.member)
            msg.member = yield msg.guild.fetchMember(msg);
        const cachedPlayCommandUser = bot.commandCache.get('currentUser');
        const cachedPlayCommand = bot.commandCache.get(parseInt(msg.content));
        if (cachedPlayCommand && cachedPlayCommandUser) {
            const playCommand = bot.commands.get('play');
            playCommand.run(bot, msg, [cachedPlayCommandUser, cachedPlayCommand]);
            return;
        }
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (!cmd.length)
            return;
        const command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
        if (command)
            command.run(bot, msg, args);
    })
};
//# sourceMappingURL=message.js.map