require("dotenv/config")
const findStore = require("./findStore")
const dialogFlow = require("./api/dialogflow")
const TelegramBotApi = require("node-telegram-bot-api")

const bot = new TelegramBotApi(process.env.BOT_TOKEN, { polling: true })

bot.on("message", async (msg) => {
    const chatId = msg.chat.id
    if(msg.hasOwnProperty("text") && msg.text === "/start"){
        bot.sendMessage(chatId, "Olá, eu sou o Carrefour Local 🗺📌, e estou aqui para lé ajudar a encontrar 🔍 uma de nossas lojas 🏪. Para isso você deve compartilhar a sua localização 🚩😉.")
    }else if(msg.hasOwnProperty("location")){
        const res = await findStore.store(msg)
        if(res.hasOwnProperty("statusCode")){
            bot.sendMessage(chatId, "Poxa, infelizmente teve um erro no servidor😪. Pode mandar a localização novamente por favor😁")
        }else if(res.location.distance <= 15.00){
            bot.sendLocation(
                chatId,
                latitude = res.location.latitude,
                longitude = res.location.longitude
            )
            bot.sendMessage(chatId, `🏪 Carrefour ${res.name}\n📞 Telefone: ${res.phone_number}\n✅ Aberto até as ${res.worktime[0].close_time}🕙\nVocê pode fazer compras pelo nosso site tbm https://www.carrefour.com.br/`)
        }else{
            bot.sendMessage(chatId, "Infelizmente não temos nenhum Carrefour próximo da sua localização atual🙇‍♂️, Você pode comprar o que precisa pelo nosso site https://www.carrefour.com.br/")
        }
    }else{
        const res = await dialogFlow.sendMessage(chatId.toString(), msg.text)
        bot.sendMessage(chatId, res.text)
    }
})