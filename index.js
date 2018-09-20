const Discord = require("discord.js");
const bot = new Discord.Client();
exports.init = () => {
  bot.on('ready', () => console.log('Ready!'));
  bot.on('message', (msg) => console.log(msg.author.username + ": " + msg.content));
  bot.login(process.env.TOKEN);
}