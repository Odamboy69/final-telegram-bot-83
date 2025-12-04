import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";
config()

const bot = new TelegramBot(process.env.BOT_TOKEN,{polling:true})

bot.on("message",(msg) =>{
    const chatId = msg.chat.id
    const firsname = msg.chat.first_name
    const text = msg.text
    
 bot.sendMessage(chatId,`Assalomu alaykum,${firsname}`)
 bot.sendMessage(chatId,`${text}`)
})
console.log("bot ishga tushdi");
