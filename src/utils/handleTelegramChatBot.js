const chatID = process.env.REACT_APP_CHAT_ID
const botToken = process.env.REACT_APP_BOT_TOKEN

export default function handleTelegramChatBot(nameState, phoneState){

    const message = `<b>Новая заявка от</b> ${nameState}%0A<b>Номер телефона:</b> ${phoneState}`
}