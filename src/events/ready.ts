import Bot from '../ts/interfaces/bot.interface'
module.exports = {
	name: 'ready',
	run: (bot: Bot) => {
		console.log(`Logged in as ${bot.user.tag}!`)
		console.log(`at ${bot.readyAt}`)
	}
}