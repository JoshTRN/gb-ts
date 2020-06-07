import { readdirSync } from 'fs'
import Bot from '../ts/interfaces/bot.interface'

const ascii: any  = require('ascii-table')
const table = new ascii().setHeading('Event', 'Load Status')

module.exports = (bot: Bot) => {

	readdirSync('./dist/events/').filter((file: string) => file.endsWith('.js')).forEach((file: string) => {

		const { name, run } = require(`../events/${file}`)

		if (name) {
			bot.on(name, run.bind(null, bot))
			table.addRow(name, '✅')
		} else {
			table.addRow(file, '❌ => file missing??') 
		} 
	})
	console.log(table.toString())
}