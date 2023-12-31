const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with the token you obtained from BotFather.
const token = '5608376726:AAH60WjEDhY49po-oYnTuAk9hOUxGLC5Tt0';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;
    bot.sendMessage(chatId, 'd')
});