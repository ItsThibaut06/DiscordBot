const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var helpmenu = new discord.RichEmbed()
    .setDescription("**__Hulpmenu__**")
    .setColor("ee0000")
    .addField("**:bust_in_silhouette: | SPELER COMMANDS **", "\n\n **?info**Geeft informatie weer \n **?serverinfo** | Geeft informatie van de server. \n **?ping** | Laat jou ping zien. \n **?ticket** | Maakt een ticket aan.")
    .addField("**:hammer_pick: | MODERATIE COMMANDS**", "\n\n **?clear** | Verwijderd een aantal berichten.. \n **?prefix** | Veranderd de bot prefix \n **?kick** | Kickt iemand van de server.\n **?ban** | Verbant iemand van de server.\n **?tempban** | Verbant iemand voor een bepaalde tijd van de server. \n **?close** | Sluit een ticket.")
    .addField("**:joy:** **|** **FUN COMMANDS**", "\n\n**?meme** | Laat een meme zien.")
    .setFooter("Tryhard Bot")
    .setTimestamp();
    return message.channel.send(helpmenu);
}

module.exports.help = {
    name: "help"
    }