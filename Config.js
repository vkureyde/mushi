const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['2347041039367']
global.ownername = "king cobra"//owner name
global.ytname = "YT: asmakev930h"
global.socialm = "GitHub: asmakev930h"
global.location = "Nigeria"

global.botname = 'Cobra-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙Cobra'
global.packname = 'Sticker By'
global.author = 'Cobra Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Cobra botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/InlWkeQ1Wdu3sKkWRKGzqo'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = True //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Cobra Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can only be used by admin,muron😁*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*can only be used by owner,so dumb🤦*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...no vex* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
