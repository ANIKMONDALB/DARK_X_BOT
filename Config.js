const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || " 918617340627"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎✘꧁༒☬☠An!k☠︎☬༒꧂✘𓆪_✰",
global.ytname = "YT: ꧁༒☬☠An!k☠︎☬༒꧂Botz.inc"
global.socialm = "GitHub: ꧁༒☬☠An!k☠︎☬༒꧂pandey023"
global.location = "srilanka"

global.botname = process.env.BOTNAME || "꧁༒☬☠An!k☠︎☬༒꧂-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘꧁༒☬☠An!k☠︎☬༒꧂✘𓆪_✰",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎✘꧁༒☬☠An!k☠︎☬༒꧂✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "꧁༒☬☠An!k☠︎☬༒꧂ botz inc."

//theme link
global.link = 'https://wa.me/message/CDRFM6UH7KGRO1'

//custom prefix
global.prefa = process.env.PREFIX || " . ",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "true", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true  //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '💟 *Here you go, darling!* ',
    prem: '💟 *My darling, this feature is reserved for premium users only*',
    admin: '💟 *My darling, this feature is reserved for admins only*',
    botAdmin: '💟 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '💟 *My dearest, this feature is reserved for the owner only*',
    group: '💟 *Sweetheart, this feature is exclusively for groups*',
    private: '💟 *My love, this feature is exclusively for private chats*',
    wait: '💟 *Darling, in process...* ',    
    error: '💟 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Godfather/gdfather.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
