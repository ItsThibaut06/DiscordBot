const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !announcement  Titel // bericht // kleur // kanaal

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Geen permissies.");

    var splitser = "//";

    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Mededeling")
            .setColor("#ff0000")
            .setDescription(`Gebruik dit commando om een mededeling te maken: \n !mededeling titel ${splitser} bericht ${splitser} kleur in # hex code  ${splitser} kanaal`)
            .setFooter("Tryhard Bot")
            .setTimestamp();

        return message.channel.send(useMessage);

    }


    args = args.join(" ").split(splitser);

    if (args[2] == undefined) args[2] = "#eeeee";
    if (args[3] == undefined) args[3] = "general";

    console.log(args);

    var options = {

        titel: args[0] || "Mededeling",
        bericht: args[1] || "No content specified.",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
        .setTitle("Mededeling:")
        .setColor(options.kleur)
        .setDescription(`Bericht van${announcer} \n\n ${options.titel} \n\n ${options.bericht} \n`)
        .setFooter("Tryhard Bot")
        .setTimestamp();

    var announcementChannel = message.guild.channels.find(`name`, options.kanaal);
    if (!announcementChannel) return message.channel.send("Ik kan dit kanaal niet vinden!");

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
    name: "Mededeling"
}