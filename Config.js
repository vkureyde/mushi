const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "923317302794"
global.ownername = "𝗥𝗼𝗺𝗶 𝗛𝗮𝗰𝗸𝗲𝗿"
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Indian"

global.ownername = '𝗥𝗼𝗺𝗶 𝗞𝗶𝗻𝗴' //owner name
global.botname = '𝐌𝐀𝐑𝐈𝐀-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '?𓆩‎✘🇪🇬🤬𝐑o͜͡M̸i͜͡ 💀𝐊i͜͡n̸𝙂🇵🇰🦅✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Romi  Bot'
//console view/theme
global.themeemoji = '😎'
global.wm = "Romi botz inc."

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
