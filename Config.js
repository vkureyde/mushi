const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "0114141192"
global.ownername = "Beltah ke"
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Kenyan"

global.ownername = 'Beltah ke' //owner name
global.botname = '𝛥𝑈𝐷𝛪𝐵𝛯𝐿𝑇𝛥𝛨' //name of the bot

//sticker details
global.stickername = '?𓆩‎✘beltah🖤✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Beltah Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

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
    done: '*here you go!* \n\n*🎀 Maria Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
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
