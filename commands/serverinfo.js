const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("Server info")
        .setColor("#fc0303")
        .setThumbnail(icon)
        .addField("Bot naam", bot.user.username)
        .addField("Je bent deze server gejoint op:", message.member.joinedAt)
        .setFooter("Tryhard Bot")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
name: "serverinfo"

}