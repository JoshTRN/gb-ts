module.exports = {
	name: 'ready',
	run: (bot: any, err: any) => {
		console.log(`Logged in as ${bot.user.tag}!`)
		console.log(`at ${bot.readyAt}`)
	}
}