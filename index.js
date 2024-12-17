const { Telegram } = require('puregram')
const { session } = require('@puregram/session')
const { AntiSpam } = require("antispamutil")

const telegram = Telegram.fromToken(process.env.TOKEN)

telegram.updates.use(session({
    initial: (context) => ({
    lastMsg: Date.now(), startIsUsed: false,
})
}))

telegram.updates.use(AntiSpam)

telegram.updates.on('message', context => context.reply('hey!'))

telegram.updates.startPolling()
