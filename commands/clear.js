const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !clear 21

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen permissies!");

    if (!args[0]) return message.reply("Geef een getal op!");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] == 0) {

                message.channel.send(`Ik kan geen0 berichten verwijderen.`).then(msg => msg.delete(3000));
            } else {

                message.channel.send(`Ik verwijderde ${args[0]} berichten!`).then(msg => msg.delete(3000));

            }

        });

    } else {
        return message.channel.send("Geef een getal op!");
    }


}

module.exports.help = {
    name: "clear"
}