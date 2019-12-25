const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) =>{

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Geen permissies!");

if(!args[0]) return message.reply("gebruik !prefix <nieuwe prefix> ");

var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

prefixes[message.guild.id] =  {
    prefixes: args[0]
};

fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) =>{
    if(err) console.log(err);
});

var stringEmbed = new discord.RichEmbed()
.setColor("#9ddba1")
.setTitle("Prefix")
.setDescription(`De botprefix is geupdate naar ${args[0]}`)
.setFooter("PurgeMC Bot")
.setTimestamp();

message.channel.send(stringEmbed);

}

module.exports.help = {
    name: "prefix"    
    }