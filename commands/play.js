const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    
 // PlayInfo embed
 var PlayInfo = new discord.RichEmbed()

 .setColor('#ff0000')
 .setDescription("Muziekbot nog in de maak!")
 .setTimestamp()
 .setFooter("Tryhard Bot")
 .setTimestamp();

return message.channel.send(PlayInfo);

}

module.exports.help = {
    name: 'play'
}