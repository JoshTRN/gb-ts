"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ascii = require('ascii-table');
const table = new ascii().setHeading('Command', 'Load Status');
module.exports = (bot) => {
    fs_1.readdirSync('./dist/commands').forEach(dir => {
        const commands = fs_1.readdirSync(`./dist/commands/${dir}`).filter(file => file.endsWith('.js') && !file.includes('.map'));
        for (let file of commands) {
            const commandFile = require(`../commands/${dir}/${file}`);
            if (commandFile.name) {
                bot.commands.set(commandFile.name, commandFile);
                table.addRow(file, '✅');
            }
            else {
                table.addRow(file, '❌ => file missing.');
                continue;
            }
            if (commandFile.aliases && Array.isArray(commandFile.aliases))
                commandFile.aliases.forEach((alias) => bot.aliases.set(alias, commandFile.name));
        }
    });
    console.log(table.toString());
};
//# sourceMappingURL=command.js.map