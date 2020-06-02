"use strict";
module.exports = {
    name: 'ready',
    run: function (bot, err) {
        console.log("Logged in as " + bot.user.tag + "!");
        console.log("at " + bot.readyAt);
    }
};
//# sourceMappingURL=ready.js.map