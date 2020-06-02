import { Client, Snowflake, ClientOptions, Collection } from 'discord.js'
require('dotenv').config()

export class Bot extends Client {
	constructor(options?: ClientOptions){ super(options)};
	public blackbelts: Collection<Snowflake, string> = new Collection
	public commands: Collection<Snowflake, string> = new Collection
	public aliases: Collection<Snowflake, string> = new Collection
	public commandCache: Collection<number | string, string> = new Collection
}

const bot: Bot = new Bot
const handlers = ['command', 'event']

handlers.forEach(handler => require(`./handler/${handler}`)(bot))

bot.login(process.env.BOT_TOKEN)