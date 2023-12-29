const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "+234 814 372 8690"
global.ownername = "Raymond"
global.ytname = "YT: RAYMOND.inc"
global.socialm = "GitHub: RAYMOND 123"
global.location = "Nigerian"

global.ownername = 'Raymond' //owner name
global.botname = 'Ray-bot' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Ray-bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Raymond inc."

//theme link
global.link = 'https://chat.whatsapp.com/GhUtAGIXNM52ebgjDZJ0nq'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*job done* ✅️',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
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
