const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "923208061149"
global.ownername = "Dana Ashiq"
global.ytname = "YT: danaashiq"
global.socialm = "GitHub: danaashiq"
global.location = "pakistan"

global.ownername = 'danaashiq' //owner name
global.botname = '*dana ashiq*' //name of the bot

//sticker details
global.stickername = '?𓆩‎✘dana ashiq⭕✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'dana Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "dana ashiq inc."

//theme link
global.link = ''

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Dana Bot 🎀*\n\n*🧩  link:* \nhttps://youtube.com/@dana_ashiq?si=X91wMbhGMENgaqia\n',
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
