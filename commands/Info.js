const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
 
    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("Discord bot info")
        .setColor("#fc0303")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Mijn baas is:", "Thibaut")
        .setFooter("PurgeMC Bot")
        .setTimestamp();
        
        return message.channel.send(botEmbed);

}

module.exports.help = {
name: "info"

}