exports.run = async (client, message) => {
  const friendly = client.config.permLevels.find(l => l.level === message.author.permLevel).name;
  message.reply(`Your permission level is: ${message.author.permLevel} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "mylevel",
  category: "Miscelaneous",
  description: "Tells you your permission level for the current message location.",
  usage: "mylevel"
};
