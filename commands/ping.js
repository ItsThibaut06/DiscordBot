const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    
 // pingInfo embed
 var pingInfo = new discord.RichEmbed()

 .setColor('#ff0000')
 .setDescription(`**Pong :ping_pong:** ${Math.round(bot.ping)}ms`)
 .setTimestamp()
 .setFooter("PurgeMC Bot")
 .setTimestamp();

return message.channel.send(pingInfo);

}

module.exports.help = {
    name: 'ping'
}