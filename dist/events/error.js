"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'error',
    run: (bot, err) => {
        console.log('The bot registered the following error:');
        console.log(err.message);
    }
};
//# sourceMappingURL=error.js.map