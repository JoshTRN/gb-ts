import { dirname, join } from 'path'
import { existsSync, readdirSync } from 'fs'
import { Message } from 'discord.js';
import Bot from '../../ts/interfaces/bot.interface'

module.exports = {
	name: `play`,
	aliases: ['p'],
	run: async (bot: Bot, msg: Message , args: string[]) => {

		const vc = msg.member.voiceChannel
		const [user, sound] = args
		const baseDir = dirname(require.main!.filename)
		bot.commandCache.set('currentUser', user)

		if (user && !sound) {
			const userDirectory = join(baseDir, `/sounds/${user}`)
			const files = readdirSync(userDirectory)
			const fileNames = files.map(file => file.split('.')[0])
			let commandOptions = ''

			for (let index in fileNames) {
				const fileNum = +index + 1
				commandOptions += `${fileNum}: ${fileNames[index]}\n`
				bot.commandCache.set(fileNum, fileNames[index])
			}

			msg.channel.send(`Commands for ${user}\n\`\`\` ${commandOptions}\`\`\``)
			return
		}

		const file = join(baseDir, `/sounds/${user}/${sound}.mp3`)

		if (!vc ||!existsSync(file)) return

		const connection = await vc.join()
		const dispatcher = connection.playFile(file)

		dispatcher.on('end', () => vc.leave())
	}
}