require("dotenv/config")
const DialogFlow = require("dialogflow")

const sessionClient = new DialogFlow.SessionsClient({
    projectId: process.env.PROJECT_ID,
    credentials: {
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL
    }
})

async function sendMessage(chatId, messege) {
    const sessionPath = sessionClient.sessionPath(process.env.PROJECT_ID, chatId)
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: messege,
                languageCode: "pt-BR"
            }
        }        
    }
    const responses = await sessionClient.detectIntent(request)
    const result = responses[0].queryResult
    return {
        text: result.fulfillmentText,
        intent: result.intent.displayName,
        fields: result.parameters.fields
    }
}

module.exports.sendMessage = sendMessage