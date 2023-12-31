const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const message_ai = require('./src/message_ai.js');
const keepAlive = require('./src/server');
const FS = require('./src/fileSystem.js');

const bot = new TelegramBot(process.env.TOKEN_BOT, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;
  const startsWith = (m) => message.startsWith(m);

  
  if (startsWith('/start')) {
    bot.sendMessage(chatId, 'Hello! I am a chatbot. How can I help you today?');
  } else if (startsWith('/info')) {
    bot.sendMessage(chatId, FS(__dirname + '/data/contact.md') || 'info', {parse_mode: 'markdown'});
  } else {
    bot.sendMessage(chatId, 'typing ...').then(msg=> {
      message_ai(message)
      .then((messageFormAi) => {
        bot.sendMessage(chatId, messageFormAi).then(e=> {
          bot.deleteMessage(chatId, msg.message_id)
        })
      })
      .catch((error) => {
        bot.sendMessage(chatId, 'سيبني شوية انا اتصدعت ناو 🥹').then(e=> {
          bot.deleteMessage(chatId, msg.message_id)
        })
      });
    })
  }
});

keepAlive()