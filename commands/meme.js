const discord = require("discord.js");
const randomPuppy = require("random-puppy");
module.exports.run = async (bot, message, args) => {
   
    const subReddits = ["dankmeme", "meme", "me_irl"];
   
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
   
    const img = await randomPuppy(random);

    const embed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter("Tryhard Bot")
        .setTimestamp();

    return message.channel.send(embed)



}
module.exports.help = {
    name: "meme"

}