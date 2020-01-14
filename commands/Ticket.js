const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "666735992115429377";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket!");

            bool = true;

        };

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hey " + message.author.username)
        .setDescription("Je ticket is aangemaakt!");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {
        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find(`name`, "@everyone"), { "READ_MESSAGES": false });

            settedParent.overwritePermissions(message.author, {
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            });

            var embedSendMessages = new discord.RichEmbed()
                .setTitle("Hey " + message.author.username.toString())
                .setDescription("Stuur hier je vraag!")
                .setFooter("Tryhard Bot")
                .setTimestamp();
            settedParent.send(embedSendMessages);

        }).catch(err =>{
            message.channel.send("Er ging iets fout");
        }).catch(err => {
            message.channel.send("Er ging iets fout");
        });
    });

};

module.exports.help = {
    name: "ticket"

}