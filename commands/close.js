const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const categoryId = "645695129750994944";
    
    if(message.channel.parentID == categoryId){
        
        message.channel.delete();

    }else{

        message.channel.send("Je kan alleen **!close** gebruiken in een ticket kanaal!");

    }

    var embedCloseTicket = new discord.RichEmbed()
    .setTitle("Hey" + message.channel.name)
    .setDescription("Je ticket is gemarkeerd als **COMPLETED**.")
    .addField("Gesloten",":closed_lock_with_key:")
    .setFooter("PurgeMC Bot")
    .setTimestamp();

    var logChannel = message.guild.channels.find("name","logs");
    if(!logChannel) return message.channel.send("Ik kan het kanaals 'logs' niet vinden!");

    logChannel.send(embedCloseTicket)

}

module.exports.help = {
name: "close"

}