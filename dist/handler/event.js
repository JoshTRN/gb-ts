"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ascii = require('ascii-table');
const table = new ascii().setHeading('Event', 'Load Status');
module.exports = (bot) => {
    fs_1.readdirSync('./dist/events/').filter((file) => file.endsWith('.js')).forEach((file) => {
        const { name, run } = require(`../events/${file}`);
        if (name) {
            bot.on(name, run.bind(null, bot));
            table.addRow(name, '✅');
        }
        else {
            table.addRow(file, '❌ => file missing??');
        }
    });
    console.log(table.toString());
};
//# sourceMappingURL=event.js.map