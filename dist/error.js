"use strict";
module.exports = {
    name: 'error',
    run: function (bot, err) {
        console.log('The bot registered the following error:');
        console.log(err.message);
    }
};
//# sourceMappingURL=error.js.map