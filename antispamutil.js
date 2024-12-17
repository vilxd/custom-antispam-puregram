const delay = 600

const AntiSpam = (context, next) => {
    if(context.text == "/start" && context.session.startIsUsed == false){
        context.session.startIdUsed = true
        return context.send("Hello!")
    }
    if(context.text){
        const getTimeSend = context.session.lastMsg
        const nowTime = Date.now()
        const res = nowTime - getTimeSend
        if(res < delay){
            return
        }
        else{
            context.session.lastMsg = Date.now()
        }
        
    }
    return next()
    
}

module.exports = {
    AntiSpam
}
