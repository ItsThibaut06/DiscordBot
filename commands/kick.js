const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        var kickUser = message.guild.member(message.mentions.users.first());

        if (!kickUser) return message.channel.send("Gebruiker is niet gevonden");

        var reason = args.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESAGES")) return message.channel.send("Je hebt hier geen permissies voor!");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet kicken.");

        var kick = new discord.RichEmbed()
            .setDescription("Kick")
            .setColor("ee0000")
            .addField("Gekickte gebruiker", kickUser)
            .addField("Gekickt door", message.author)
            .addField("Reden", reason)
            .setFooter("PurgeMC Bot")
            .setTimestamp();
            
        var kickChannel = message.guild.channels.find(`name`, "logs");
        if (!kickChannel) return message.guild.send("Ik kan het kanaal  'logs' niet vinden!");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;

    }

module.exports.help = {
name: "kick"

}