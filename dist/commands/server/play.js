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
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
module.exports = {
    name: `play`,
    aliases: ['p'],
    run: (bot, msg, args) => __awaiter(void 0, void 0, void 0, function* () {
        const vc = msg.member.voiceChannel;
        const [user, sound] = args;
        const baseDir = path_1.dirname(require.main.filename);
        bot.commandCache.set('currentUser', user);
        if (user && !sound) {
            const userDirectory = path_1.join(baseDir, `/sounds/${user}`);
            const files = fs_1.readdirSync(userDirectory);
            const fileNames = files.map(file => file.split('.')[0]);
            let commandOptions = '';
            for (let index in fileNames) {
                const fileNum = parseInt(index) + 1;
                commandOptions += `${fileNum}: ${fileNames[index]}\n`;
                bot.commandCache.set(fileNum, fileNames[index]);
            }
            msg.channel.send(`Commands for ${user}\n\`\`\` ${commandOptions}\`\`\``);
            return;
        }
        const file = path_1.join(baseDir, `/sounds/${user}/${sound}.mp3`);
        if (!vc || !fs_1.existsSync(file))
            return;
        const connection = yield vc.join();
        const dispatcher = connection.playFile(file);
        dispatcher.on('end', () => vc.leave());
    })
};
//# sourceMappingURL=play.js.map