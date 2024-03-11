const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['+254701879555']
global.ownername = "Leli"//owner name
global.ytname = "Leli"
global.socialm = "GitHub: LelionS"
global.location = "Kenya"

global.botname = 'Leli' //name of the bot

//sticker details
global.stickername = 'Leli𓆩‎'
global.packname = 'Sticker By'
global.author = 'Aoihanabira Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Aoihanabira inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = true//auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*Tadaaam! Like magic, but without the wand!* \n\n*🎀 Aoihanabira Bot 🎀*\n\n*🧩 Bot link:* \n',
    prem: '*Premium user only*',
    admin: '*Admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*Under the hood, tinkering away...* ',    
    error: '*Error 404 Found!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
