const OpenAI = require('openai');


const openai = new OpenAI({
  apiKey: process.env.AI_TOKEN,
});

async function message_ai(message) {
  let chatCompletion = await openai.chat.completions.create({
    messages: [{
      "role": "user",
      "content": message
      }],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0].message.content;
}


module.exports = message_ai;