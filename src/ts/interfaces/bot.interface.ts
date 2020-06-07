import { Client, Snowflake, Collection } from 'discord.js'

export default interface Bot extends Client {
	blackbelts: Collection<Snowflake, string>
	commands: Collection<Snowflake, string>
	aliases: Collection<Snowflake, string>
	commandCache: Collection<number | string, string>
}