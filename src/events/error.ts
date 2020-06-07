import Bot from '../ts/interfaces/bot.interface'

module.exports = {
	name: 'error',
	run: (bot: Bot, err: Error) => {
		console.log('The bot registered the following error:')
		console.log(err.message)
	}
}