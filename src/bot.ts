import { Client, Collection } from 'discord.js'
import Bot from './ts/interfaces/bot.interface'

require('dotenv').config()

const bot = new Client as Bot
bot.blackbelts = new Collection
bot.aliases = new Collection
bot.commandCache = new Collection
bot.commands = new Collection

const handlers = ['command', 'event']
handlers.forEach(handler => require(`./handler/${handler}`)(bot))

bot.login(process.env.BOT_TOKEN)