import { Bot } from '../bot'

module.exports = {
	name: 'error',
	run: (bot: Bot, err: any) => {
		console.log('The bot registered the following error:')
		console.log(err.message)
	}
}