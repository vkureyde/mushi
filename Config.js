const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['243833193797']
global.ownername = "JOKE BOT"//owner name
global.ytname = "Ahahahahahha"
global.socialm = "ahahahahahahah"
global.location = "GOTHAM"

global.botname = 'JOKE BOT' //name of the bot

//sticker details
global.stickername = 'the killimg joke🃏'
global.packname = 'Sticker By'
global.author = 'joke Bot'
//console view/theme
global.themeemoji = '🃏'
global.wm = "joke bot"

//theme link
global.link = 'https://chat.whatsapp.com/HeiBztom00Z8PJEHX1Jdp8'

//custom prefix
global.prefa = ['!']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*salut! je suis* \n\n*🎀 joke_bot 🎀*\n\n*🧩 Bot link:* \n\n',
    prem: '*cette fonction est utilisable que par les premium*',
    admin: '*cette fonction est utilisable que par les admins*',
    botAdmin: '*cette fonction peut être utiliser que si le bot est admin* ',
    owner: '*cette fonction est utilisable que par le propriétaire*',
    group: '*cette fonction est disponible que dans les groupes*',
    private: '*Cette fonction est disponible que pour les chats privés*',
    wait: '*patientez...* ',    
    error: '*Erreur!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
