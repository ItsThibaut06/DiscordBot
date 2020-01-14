const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banUser = message.guild.member(message.mentions.users.first());

    if (!banUser) return message.channel.send("Ik kan deze gebruiker niet vinden!");

    var reason = args.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESAGES")) return message.channel.send("Geen permissies!");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kan deze gebruiker niet verbannen! :face_palm: ");

    var ban = new discord.RichEmbed()
        .setDescription("Ban")
        .setColor("ee0000")
        .addField("Verbande gebruiker", Banuser)
        .addField("Verband door", message.author)
        .addField("Reden", reason)
        .setFooter("Tryhard Bot")
                .setTimestamp();

    var banChannel = message.guild.channels.find(`name`, "logs");
    if (!banChannel) return message.guild.send("Ik kan het kanaal 'logs' niet vinden. Maak een kanaal aan met de naam 'logs'. ");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban"
}