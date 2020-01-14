const discord = require('discord.js');
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

// !tempban gebruiker tijd reden

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Geen permissies!");

var user = message.guild.member(message.mentions.users.first());

if(!user) return message.channel.send("gebruiker !tempban <@user> <tijd> <reden>");

if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ik kan deze gebruiker niet verbannen! :face_palm:");

var tempbanTime = args[1];

var reason = args.join(" ").slice(22);

if(!reason) return message.channel.send("Geef me een reden!");

if (ms(tempbanTime)){

await message.guild.member(user).ban(reason);

var Tempbanban = new discord.RichEmbed()
.setDescription("Tempban")
.setColor("#ff0000")
.addField(`${user}`, `Is tijdelijker verbannen voor: ${reason}`)
.setFooter("Tryhard Bot")
.setTimestamp();

message.channel.send(Tempbanban);

setTimeout(function(){

message.guild.unban(user.id);

var Tempbanunban = new discord.RichEmbed()
.setDescription("Unbanned")
.setColor("#ff0000")
.addField(`${user}`, "is niet langer verbannen.")
.setFooter("Tryhard Bot")
.setTimestamp();

message.channel.send(Tempbanunban);

}, ms(tempbanTime));

} else  {

    return message.channel.send("Geef een tijd op!");
}

};
module.exports.help = {
name: "tempban"
}